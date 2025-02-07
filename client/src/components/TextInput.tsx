export function TextInput({
  placeholder,
  onchange,
  value,
  password,
}: {
  placeholder: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  password?: boolean;
}) {
  return (
    <input
      className="rounded-sm text-2xl w-full pl-6 py-7 bg-secundaryGreen placeholder:text-primaryGreen focus: accent-primaryGreen"
      type={password ? "password" : "text"}
      placeholder={placeholder}
      value={value}
      onChange={onchange}
    />
  );
}
