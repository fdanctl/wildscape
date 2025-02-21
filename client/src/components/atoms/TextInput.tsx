export function TextInput({
  placeholder,
  onchange,
  value,
  password,
  className,
  id
}: {
  placeholder?: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  password?: boolean;
  className?: string;
  id?: string;
}) {
  return (
    <input
      className={`rounded-sm w-full bg-secundaryGreen placeholder:text-primaryGreen ${className} focus: accent-primaryGreen`}
      type={password ? "password" : "text"}
      placeholder={placeholder}
      value={value}
      onChange={onchange}
      id={id}
    />
  );
}
