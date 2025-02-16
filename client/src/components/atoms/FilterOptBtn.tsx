export function FilterOptBtn({
  name,
  selected,
}: {
  name: string;
  selected: boolean;
}) {
  return (
    <>
      {!selected ? (
        <button className="rounded-lg px-4 py-2 self-end border border-primaryGreen transition-all duration-200 ease-in-out hover:brightness-105">
          <p className="text-primaryGreen font-bold">{name}</p>
        </button>
      ) : (
        <button className="rounded-lg px-4 py-2 self-end bg-primaryGreen transition-all duration-200 ease-in-out hover:brightness-105">
          <p className="text-grayish font-bold">{name}</p>
        </button>
      )}
    </>
  );
}
