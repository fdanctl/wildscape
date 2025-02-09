import { TextInput } from "../atoms/TextInput";

export function SearchBar({ placeholder }: { placeholder: string }) {
  return (
    <div className="flex relative">
      <TextInput
        placeholder={`${placeholder} name`}
        onchange={() => console.log("bruh")}
        value={""}
        className="pr-5 pl-6 py-1"
      />
      <i className="absolute right-3 top-1/2 transform -translate-y-1/2">
        <svg
          width="20"
          height="20"
          viewBox="0 0 46 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.7917 0.75C21.2451 0.75 25.5161 2.51912 28.6652 5.66816C31.8142 8.81721 33.5833 13.0882 33.5833 17.5417C33.5833 21.7008 32.0592 25.5242 29.5533 28.4692L30.2508 29.1667H32.2917L45.2083 42.0833L41.3333 45.9583L28.4167 33.0417V31.0008L27.7192 30.3033C24.6718 32.9034 20.7975 34.3322 16.7917 34.3333C12.3382 34.3333 8.06721 32.5642 4.91816 29.4152C1.76912 26.2661 0 21.9951 0 17.5417C0 13.0882 1.76912 8.81721 4.91816 5.66816C8.06721 2.51912 12.3382 0.75 16.7917 0.75ZM16.7917 5.91667C10.3333 5.91667 5.16667 11.0833 5.16667 17.5417C5.16667 24 10.3333 29.1667 16.7917 29.1667C23.25 29.1667 28.4167 24 28.4167 17.5417C28.4167 11.0833 23.25 5.91667 16.7917 5.91667Z"
            fill="#344E41"
          />
        </svg>
      </i>
    </div>
  );
}
