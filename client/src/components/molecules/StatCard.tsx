export function StatCard({
  title,
  value,
  className,
}: {
  title: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={`text-center flex flex-col justify-center items-center ${className}`}>
      <p className="text-lg">{title}</p>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}
