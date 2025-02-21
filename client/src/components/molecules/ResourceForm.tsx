import { MainBtnS } from "../atoms/MainBtnS";
import { RadioBtn } from "../atoms/RadioBtn";
import { TextInput } from "../atoms/TextInput";
import { RadionSection } from "./RadioSection";

// make to also edit, props { edit, state }: {edit: bool; state: ResourceInterface}
export function ResourceForm() {
  const typeLabel = [
    { label: "food", value: "food" },
    { label: "medicine", value: "medicine" },
  ];

  const unitLabel = [
    { label: "kg", value: "kg" },
    { label: "doses", value: "doses" },
    { label: "tablets", value: "tablets" },
  ];

  return (
    <form className="rounded-xl px-14 py-10 bg-secundaryGreen z-50 flex flex-col">
      {/* or edit */}
      <h2 className="font-bold text-3xl text-center mb-5">Add New Resource</h2>
      <div className="flex gap-4 [&_p]: text-lg">
        <div className="flex flex-col items-end gap-2 [&>p]:font-bold [&>p]:after:content-[':']">
          <p>Name</p>
          <p>Type</p>
          <p>Quantity</p>
          <p>Unit</p>
        </div>
        <div className="flex flex-col gap-2">
          <TextInput
            className="!bg-grayish"
            onchange={() => console.log("jdwo")}
            value=""
          />
          <RadionSection>
            {typeLabel.map((e, i) => (
              <RadioBtn
                key={i.toString()}
                label={e.label}
                name="type"
                value={e.value}
                id={e.value}
              />
            ))}
          </RadionSection>
          <TextInput
            className="max-w-20 !bg-grayish"
            onchange={() => console.log("jdwo")}
            value=""
          />
          <RadionSection>
            {unitLabel.map((e, i) => (
              <RadioBtn
                key={i.toString()}
                label={e.label}
                name="unit"
                value={e.value}
                id={e.value}
              />
            ))}
          </RadionSection>
        </div>
      </div>
      <MainBtnS
        text="Add"
        className="self-end mt-4"
        onclick={() => console.log("bruh")}
      />
    </form>
  );
}
