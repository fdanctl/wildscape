import { useState } from "react";
import { useAnimalFilters } from "../../hooks/useAnimalFilters";
import { MainBtnS } from "../atoms/MainBtnS";
import { RadioBtn } from "../atoms/RadioBtn";
import { TextInput } from "../atoms/TextInput";
import { RadionSection } from "./RadioSection";

interface Form {
  name: string;
  age: string;
  species: string;
  gender: string;
  needs: DailyForm[];
}

interface DailyForm {
  resource: string;
  quantity: string;
}

export function AnimalForm() {
  const genderLabel = [
    { label: "male", value: "male" },
    { label: "female", value: "female" },
  ];

  const { q } = useAnimalFilters();

  const [form, setForm] = useState<Form>({
    name: q ? q : "",
    age: "",
    species: "",
    gender: "",
    needs: [],
  });

  const [dailyForm, setDailyForm] = useState<DailyForm>({
    resource: "",
    quantity: "",
  });

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof Form,
  ) => setForm((ps) => ({ ...ps, [field]: e.target.value }));

  const handleDailyFormChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof DailyForm,
  ) => setDailyForm((ps) => ({ ...ps, [field]: e.target.value }));

  return (
    <form className="rounded-xl px-14 py-10 bg-secundaryGreen z-50 flex flex-col">
      {/* or edit */}
      <h2 className="font-bold text-3xl text-center mb-5">Add New Animal</h2>
      <div className="flex gap-4 [&_p]: text-lg">
        <div className="flex flex-col gap-2 items-end [&>label]:font-bold [&>label]:after:content-[':'] [&>label]:text-right">
          <label htmlFor="name">Name</label>
          <label htmlFor="age">Age</label>
          <label htmlFor="species">Species</label>
          <label htmlFor="gender">Gender</label>
          <label>Needs</label>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <TextInput
            className="!bg-grayish"
            onchange={(e) => handleFormChange(e, "name")}
            value={form.name}
            id="name"
          />
          <TextInput
            className="!w-10 !bg-grayish"
            onchange={(e) => handleFormChange(e, "age")}
            value={form.age}
            id="age"
          />
          <TextInput
            className="!bg-grayish"
            onchange={(e) => handleFormChange(e, "species")}
            value={form.species}
            id="species"
          />
          {/* ^^ change to a dropdown ^^ */}
          <RadionSection>
            {genderLabel.map((e, i) => (
              <RadioBtn
                key={i.toString()}
                label={e.label}
                name="gender"
                value={e.value}
                id={e.value}
              />
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
              onchange={(e) => handleDailyFormChange(e, "resource")}
              value={dailyForm.resource}
              id="resource"
            />
            <TextInput
              className="!w-20 !bg-grayish"
              onchange={(e) => handleDailyFormChange(e, "quantity")}
              value={dailyForm.quantity}
              id="quantity"
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
