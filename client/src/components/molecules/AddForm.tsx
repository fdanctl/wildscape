import { MainBtnS } from "../atoms/MainBtnS";
import { TextInput } from "../atoms/TextInput";

export function AddForm() {
  return (
    <form className="rounded-xl px-14 py-10 bg-secundaryGreen z-50 flex flex-col">
      <h2 className="font-bold text-3xl text-center mb-5">Resource name</h2>
      <div className="grid grid-cols-[auto,3fr,1fr] gap-4 [&_p]: text-lg">
        <div className="flex flex-col gap-2 items-end [&>p]:font-bold [&>p]:after:content-[':']">
          <p>Current quantity</p>
          <p>Add quantity</p>
        </div>
        <div className="flex flex-col gap-2">
          <p>250 kg</p>
          <div className="flex gap-2">
            <TextInput className="max-w-20 !bg-grayish" onchange={()=>console.log("jdwo")} value="" />
            <p>kg</p>
          </div>
        </div>
      </div>
      <MainBtnS text="Add" className="self-end mt-4" onclick={() => console.log("bruh")} />
    </form>
    )
}
