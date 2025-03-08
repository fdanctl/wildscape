import { ChangeEvent } from "react";

export function Dropdown({
  id,
  value,
  options,
  onchange,
}: {
  id: string;
  value: string;
  options: Array<{ value: string; name: string }>;
  onchange: (e: ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <select
      className="bg-grayish accent-primaryGreen"
      id={id}
      value={value}
      onChange={onchange}
    >
      <option value="" disabled>
        -- Select an option --
      </option>
      {options.map((e) => (
        <option key={e.value} value={e.value}>
          {e.name}
        </option>
      ))}
    </select>
  );
}
