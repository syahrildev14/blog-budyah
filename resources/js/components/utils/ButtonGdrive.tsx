import { FaCloudDownloadAlt } from "react-icons/fa";

interface DriveButtonProps {
  href: string;
  label?: string;
}

export default function DriveButton({ href, label = "Download Materi" }: DriveButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center w-1/2 mx-auto justify-center gap-2 bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition shadow-md"
    >
      <FaCloudDownloadAlt size={18} />
      {label}
    </a>
  );
}
