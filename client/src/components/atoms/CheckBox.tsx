export function CheckBox() {
  return (
    <input
      className="appearance-none rounded m-0 w-6 h-6 bg-grayish border border-primaryGreen flex items-center justify-center cursor-pointer checked:before:rounded checked:bg-grayish checked:before:w-4 checked:before:h-4 checked:before:bg-primaryGreen checked:before:block"
      type={"checkbox"}
    />
  );
}
