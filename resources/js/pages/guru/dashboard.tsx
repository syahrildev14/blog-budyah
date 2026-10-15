import AdminLayout from "@/layouts/dashboard/app-layout";
import { usePage } from "@inertiajs/react";
import { Bar, Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    ChartOptions,
} from "chart.js";
import { FileText, LayoutGrid, TrendingUp, Sparkles, type LucideIcon } from "lucide-react";
import { ReactNode } from "react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

interface CategoryStat {
    category: string;
    count: number;
}

interface MonthStat {
    month: string;
    count: number;
}

interface Stats {
    totalPosts: number;
    postsByCategory: CategoryStat[];
    postsByMonth: MonthStat[];
}

// Fixed categorical order (validated for CVD-safe adjacency) — never cycle hues.
const CATEGORY_COLORS = [
    "#2a78d6", // blue
    "#008300", // green
    "#e87ba4", // magenta
    "#eda100", // yellow
    "#1baf7a", // aqua
    "#eb6834", // orange
    "#4a3aa7", // violet
    "#e34948", // red
    "#898781", // overflow bucket (9th+ category)
];

const CATEGORY_LABELS: Record<string, string> = {
    SD: "SD / MI",
    SMP: "SMP / MTs",
    SMA: "SMA / SMK",
    Umum: "Umum",
    CERITA_LUCU: "Cerita Lucu",
    CERITA_MISTERI: "Cerita Misteri",
    CERITA_CINTA: "Cerita Cinta",
    CERITA_ANAK: "Cerita Anak",
    CERITA_KEHIDUPAN: "Cerita Kehidupan",
};

const AXIS_GRID = { color: "#e1e0d9" };
const AXIS_TICKS = { color: "#898781", font: { size: 11 } };

export default function Dashboard() {
    const { stats } = usePage<{ stats: Stats }>().props;

    const categoryLabels = stats.postsByCategory.map((c) => CATEGORY_LABELS[c.category] ?? c.category);
    const categoryColors = stats.postsByCategory.map((_, i) => CATEGORY_COLORS[i % CATEGORY_COLORS.length]);
    const topCategory = [...stats.postsByCategory].sort((a, b) => b.count - a.count)[0];
    const totalThisYear = stats.postsByMonth.reduce((sum, m) => sum + m.count, 0);

    const categoryData = {
        labels: categoryLabels,
        datasets: [
            {
                label: "Jumlah Artikel",
                data: stats.postsByCategory.map((c) => c.count),
                backgroundColor: categoryColors,
                borderColor: "#fcfcfb",
                borderWidth: 2,
            },
        ],
    };

    const monthData = {
        labels: stats.postsByMonth.map((m) => m.month),
        datasets: [
            {
                label: "Artikel",
                data: stats.postsByMonth.map((m) => m.count),
                backgroundColor: "#dc2626",
                borderRadius: 6,
                maxBarThickness: 36,
            },
        ],
    };

    const horizontalData = {
        labels: categoryLabels,
        datasets: [
            {
                label: "Jumlah Artikel",
                data: stats.postsByCategory.map((c) => c.count),
                backgroundColor: categoryColors,
                borderRadius: 6,
            },
        ],
    };

    const pieOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "bottom" as const,
                labels: { color: "#52514e", boxWidth: 10, boxHeight: 10, padding: 14, font: { size: 12 } },
            },
        },
    } satisfies ChartOptions<"pie">;

    const monthOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            x: { grid: { display: false }, ticks: AXIS_TICKS },
            y: { beginAtZero: true, ticks: { ...AXIS_TICKS, stepSize: 1 }, grid: AXIS_GRID },
        },
    } satisfies ChartOptions<"bar">;

    const horizontalOptions = {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: "y" as const,
        plugins: { legend: { display: false } },
        scales: {
            x: { beginAtZero: true, ticks: { ...AXIS_TICKS, stepSize: 1 }, grid: AXIS_GRID },
            y: { grid: { display: false }, ticks: AXIS_TICKS },
        },
    } satisfies ChartOptions<"bar">;

    return (
        <AdminLayout>
            <div className="space-y-6">
                {/* Stat cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <StatCard icon={FileText} label="Total Artikel" value={stats.totalPosts} accent="bg-red-50 text-red-600" />
                    <StatCard
                        icon={LayoutGrid}
                        label="Jumlah Kategori"
                        value={stats.postsByCategory.length}
                        accent="bg-blue-50 text-blue-600"
                    />
                    <StatCard
                        icon={Sparkles}
                        label="Kategori Terbanyak"
                        value={topCategory ? CATEGORY_LABELS[topCategory.category] ?? topCategory.category : "-"}
                        accent="bg-amber-50 text-amber-600"
                        isText
                    />
                    <StatCard
                        icon={TrendingUp}
                        label="Artikel Tahun Ini"
                        value={totalThisYear}
                        accent="bg-emerald-50 text-emerald-600"
                    />
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <ChartCard title="Distribusi Kategori" description="Proporsi artikel pada setiap kategori">
                        {stats.postsByCategory.length === 0 ? (
                            <EmptyChart />
                        ) : (
                            <Pie data={categoryData} options={pieOptions} />
                        )}
                    </ChartCard>

                    <ChartCard title="Tren Artikel per Bulan" description="Jumlah artikel yang dipublikasikan tiap bulan">
                        {stats.postsByMonth.length === 0 ? (
                            <EmptyChart />
                        ) : (
                            <Bar data={monthData} options={monthOptions} />
                        )}
                    </ChartCard>
                </div>

                <ChartCard title="Peringkat Kategori" description="Jumlah artikel per kategori, diurutkan dari yang terbanyak">
                    {stats.postsByCategory.length === 0 ? (
                        <EmptyChart />
                    ) : (
                        <Bar data={horizontalData} options={horizontalOptions} />
                    )}
                </ChartCard>
            </div>
        </AdminLayout>
    );
}

function StatCard({
    icon: Icon,
    label,
    value,
    accent,
    isText,
}: {
    icon: LucideIcon;
    label: string;
    value: string | number;
    accent: string;
    isText?: boolean;
}) {
    return (
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md">
            <div className={`mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl ${accent}`}>
                <Icon size={20} />
            </div>
            <p className="text-sm text-gray-500">{label}</p>
            <p className={`mt-1 font-bold text-gray-900 ${isText ? "truncate text-lg" : "text-2xl"}`}>{value}</p>
        </div>
    );
}

function ChartCard({ title, description, children }: { title: string; description?: string; children: ReactNode }) {
    return (
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="mb-4">
                <h3 className="font-semibold text-gray-900">{title}</h3>
                {description && <p className="text-xs text-gray-500">{description}</p>}
            </div>
            <div className="h-72 md:h-80">{children}</div>
        </div>
    );
}

function EmptyChart() {
    return <div className="flex h-full items-center justify-center text-sm text-gray-400">Belum ada data untuk ditampilkan</div>;
}
