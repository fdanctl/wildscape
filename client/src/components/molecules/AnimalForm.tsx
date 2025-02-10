import { MainBtnS } from "../atoms/MainBtnS";
import { RadioBtn } from "../atoms/RadioBtn";
import { TextInput } from "../atoms/TextInput";
import { RadionSection } from "./RadioSection";

export function AnimalForm() {
  const genderLabel = [
    { label: "male", value: "male" },
    { label: "female", value: "female" },
  ];

  return (
    <form className="rounded-xl px-14 py-10 bg-secundaryGreen z-50 flex flex-col">
      {/* or edit */}
      <h2 className="font-bold text-3xl text-center mb-5">Add New Animal</h2>
      <div className="flex gap-4 [&_p]: text-lg">
        <div className="flex flex-col gap-2 items-end [&>p]:font-bold [&>p]:after:content-[':'] [&>p]:text-right">
          <p>Name</p>
          <p>Age</p>
          <p>Species</p>
          <p>Gender</p>
          <p>Needs</p>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <TextInput
            className="!bg-grayish"
            onchange={() => console.log("jdwo")}
            value=""
          />
          <TextInput
            className="w-10 !bg-grayish"
            onchange={() => console.log("jdwo")}
            value=""
          />
          <TextInput
            className="!bg-grayish"
            onchange={() => console.log("jdwo")}
            value=""
          />
          {/* ^^ change to a dropdown ^^ */}
          <RadionSection>
            {genderLabel.map((e) => (
              <RadioBtn label={e.label} name="gender" value={e.value} />
            ))}
          </RadionSection>
        </div>
      </div>
      <div className="px-14 py-10 bg-secundaryGreen flex flex-col">
        <h2 className="font-bold text-xl text-center mb-3">Add a Daily Need</h2>
        <div className="flex gap-4 [&_p]: text-lg">
          <div className="flex flex-col gap-2 items-end [&>p]:font-bold [&>p]:after:content-[':']">
            <p>Resource</p>
            <p>Quantity</p>
          </div>
          <div className="flex flex-col gap-2">
            <TextInput
              className="!bg-grayish"
              onchange={() => console.log("jdwo")}
              value=""
            />
            <TextInput
              className="w-20 !bg-grayish"
              onchange={() => console.log("jdwo")}
              value=""
            />
          </div>
        </div>
        <MainBtnS
          text="Add"
          className="self-end mt-4"
          onclick={() => console.log("bruh")}
        />
      </div>
      <MainBtnS
        text="Add"
        className="self-end mt-4"
        onclick={() => console.log("bruh")}
      />
    </form>
  );
}
