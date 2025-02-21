import { MainBtnS } from "../atoms/MainBtnS";
import { SearchBar } from "./SearchBar";

export function SearchAndAddBar({
  searchPlaceholder,
  searchValue,
  searchOnChange,
  addBtnOnClick,
}: {
  searchPlaceholder: string;
  searchValue: string;
  searchOnChange: (e: string) => void;
  addBtnOnClick: () => void;
}) {
  return (
    <div className="grid gap-3 grid-cols-[1fr,auto]">
      <SearchBar
        placeholder={searchPlaceholder}
        value={searchValue}
        onchange={searchOnChange}
      />
      <MainBtnS text="Add" onclick={addBtnOnClick} />
    </div>
  );
}
