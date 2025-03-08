export function RadioBtn({
  label,
  name,
  value,
  id,
  checked,
  onchange,
}: {
  label: string;
  name: string;
  value: string;
  id: string;
  checked: boolean;
  onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex gap-1">
      <input
        className="bg-grayish accent-primaryGreen"
        type={"radio"}
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onchange}
      />
      <label htmlFor={value}>{label}</label>
    </div>
  );
}
