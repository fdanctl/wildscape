export function Task({
  handleDone,
  text,
  done,
}: {
  handleDone: () => void;
  text: string;
  done: boolean;
}) {
  const style = done ? "bg-primaryGreen text-grayish": "border border-primaryGreen text-primaryGreen"
}
