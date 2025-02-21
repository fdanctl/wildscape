export function FilterBtn({
  filters = 0,
  onclick,
}: {
  filters?: number;
  onclick: () => void;
}) {
  return (
    <button className="rounded-lg px-4 py-2 self-end flex justify-end items-center gap-2 border border-primaryGreen transition-all duration-200 ease-in-out hover:brightness-125"
    onClick={onclick}
    >
      <p className="text-primaryGreen">Filter</p>
      {filters > 0 ? (
        <div className="flex justify-center items-center w-4 h-4 bg-primaryGreen rounded-full text-white">
          <p className="text-[0.5rem]">{filters}</p>
        </div>
      ) : (
        <svg
          width="18"
          height="12"
          viewBox="0 0 18 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.75 1C0.75 0.801088 0.829018 0.610322 0.96967 0.46967C1.11032 0.329018 1.30109 0.25 1.5 0.25H16.5C16.6989 0.25 16.8897 0.329018 17.0303 0.46967C17.171 0.610322 17.25 0.801088 17.25 1C17.25 1.19891 17.171 1.38968 17.0303 1.53033C16.8897 1.67098 16.6989 1.75 16.5 1.75H1.5C1.30109 1.75 1.11032 1.67098 0.96967 1.53033C0.829018 1.38968 0.75 1.19891 0.75 1ZM3.25 6C3.25 5.80109 3.32902 5.61032 3.46967 5.46967C3.61032 5.32902 3.80109 5.25 4 5.25H14C14.1989 5.25 14.3897 5.32902 14.5303 5.46967C14.671 5.61032 14.75 5.80109 14.75 6C14.75 6.19891 14.671 6.38968 14.5303 6.53033C14.3897 6.67098 14.1989 6.75 14 6.75H4C3.80109 6.75 3.61032 6.67098 3.46967 6.53033C3.32902 6.38968 3.25 6.19891 3.25 6ZM6.25 11C6.25 10.8011 6.32902 10.6103 6.46967 10.4697C6.61032 10.329 6.80109 10.25 7 10.25H11C11.1989 10.25 11.3897 10.329 11.5303 10.4697C11.671 10.6103 11.75 10.8011 11.75 11C11.75 11.1989 11.671 11.3897 11.5303 11.5303C11.3897 11.671 11.1989 11.75 11 11.75H7C6.80109 11.75 6.61032 11.671 6.46967 11.5303C6.32902 11.3897 6.25 11.1989 6.25 11Z"
            fill="#344E41"
          />
        </svg>
      )}
    </button>
  );
}
