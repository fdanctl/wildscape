export function RadioBtn({ label, name, value }: { label: string; name: string; value: string; }) {
  return (
    <div className="flex gap-1">
      <input className="bg-grayish accent-primaryGreen" type={"radio"} id={value} name={name} value={value} />
      <label htmlFor={value} >{label}</label>
    </div>
  )
}
