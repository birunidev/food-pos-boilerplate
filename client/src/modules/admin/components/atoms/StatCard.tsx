export interface StatCardProps {
  label: string;
  value: number | string;
  color?: "red" | "green" | "default";
}

const colorMapper = {
  red: "text-red-600",
  green: "text-success",
  default: "text-black",
};

export default function StatCard({
  label,
  value,
  color = "default",
}: StatCardProps) {
  return (
    <div className="py-[20px] text-center rounded-xl shadow space-y-2">
      <p className="text-sm xl:text-base text-gray-600">{label}</p>
      <p className={`font-bold text-base xl:text-2xl ${colorMapper[color]}`}>
        {value}
      </p>
    </div>
  );
}
