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

export default function Dashboard() {
    const { stats } = usePage<{ stats: Stats }>().props;

    // Chart kategori (Pie)
    const categoryData = {
        labels: stats.postsByCategory.map((c) => c.category),
        datasets: [
            {
                label: "Jumlah Post",
                data: stats.postsByCategory.map((c) => c.count),
                backgroundColor: [
                    "#f87171",
                    "#fbbf24",
                    "#34d399",
                    "#60a5fa",
                    "#a78bfa",
                ],
            },
        ],
    };

    // Chart bulan (Bar vertikal)
    const monthData = {
        labels: stats.postsByMonth.map((m) => m.month),
        datasets: [
            {
                label: "Jumlah Post",
                data: stats.postsByMonth.map((m) => m.count),
                backgroundColor: "#f87171",
            },
        ],
    };

    // Chart horizontal (Bar horizontal)
    const horizontalData = {
        labels: stats.postsByCategory.map((c) => c.category),
        datasets: [
            {
                label: "Jumlah Post per Kategori",
                data: stats.postsByCategory.map((c) => c.count),
                backgroundColor: "#60a5fa",
            },
        ],
    };

    // Options chart
    const chartOptions: ChartOptions<"bar"> = {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: "y", // horizontal
        plugins: {
            legend: {
                position: "bottom",
            },
            title: {
                display: false,
            },
        },
        scales: {
            x: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1,
                },
            },
        },
    };


    const defaultOptions: ChartOptions<"bar"> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: "bottom" },
            title: { display: false },
        },
    };

    return (
        <AdminLayout>
            <div className="bg-white p-6 rounded shadow space-y-6">
                <h2 className="text-2xl font-bold">Dashboard</h2>
                <p className="text-gray-700">
                    Total Posts: <span className="font-semibold">{stats.totalPosts}</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Pie Chart kategori */}
                    <div className="bg-white p-4 rounded h-96">
                        <h3 className="font-semibold mb-4">Posts per Category</h3>
                        <Pie data={categoryData} options={defaultOptions} />
                    </div>

                    {/* Bar vertikal per bulan */}
                    <div className="bg-white p-4 rounded h-96">
                        <h3 className="font-semibold mb-4">Posts per Month</h3>
                        <Bar data={monthData} options={defaultOptions} />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                    {/* Horizontal bar chart */}
                    <div className="bg-white p-4 rounded h-96">
                        <h3 className="font-semibold mb-4">Posts per Category (Horizontal)</h3>
                        <Bar data={horizontalData} options={chartOptions} />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
