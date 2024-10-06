import StatCard, { StatCardProps } from "../atoms/StatCard";

export default function StatCards({
  statCards,
}: {
  statCards: StatCardProps[];
}) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
      {statCards.map((statCard, index) => (
        <StatCard key={index} {...statCard} />
      ))}
    </div>
  );
}
