export function RadioBtn({
  label,
  name,
  value,
  id,
  onchange,
}: {
  label: string;
  name: string;
  value: string;
  id: string;
  onchange?: () => void;
}) {
  return (
    <div className="flex gap-1">
      <input
        className="bg-grayish accent-primaryGreen"
        type={"radio"}
        id={id}
        name={name}
        value={value}
        onChange={onchange}
      />
      <label htmlFor={value}>{label}</label>
    </div>
  );
}
