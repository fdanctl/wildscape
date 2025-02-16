import { XSvg } from "../atoms/XSvg";

export function LowResourcesNttf({ quantity }: { quantity: number }) {
  return (
    <div className="rounded-xl bg-redish px-6 py-8 absolute z-10 right-5 bottom-5 max-w-md">
      <p className="text-2xl font-bold text-center text-white">
        {`You have ${quantity} resources in critical state`}
      </p>
      <div className="bg-black rounded-full absolute right-0 top-0 p-[5px] mt-[-10px] mr-[-10px]">
        <XSvg color="white"/>
      </div>
    </div>
  );
}
