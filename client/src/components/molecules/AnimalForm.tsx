import { ChangeEvent, useEffect, useState } from "react";
import { useAnimalFilters } from "../../hooks/useAnimalFilters";
import { capitalize, isFormFilled } from "../../lib/utils";
import {
  Animal,
  AnimalWithId,
  DailyNeeds,
  speciesOptions,
} from "../../models/animal";
import { ResourceWithId } from "../../models/resource";
import { Dropdown } from "../atoms/Dropdown";
import { MainBtnS } from "../atoms/MainBtnS";
import { NeedDiv } from "../atoms/NeedDiv";
import { RadioBtn } from "../atoms/RadioBtn";
import { SecundaryBtnS } from "../atoms/SecundaryBtnS";
import { TextInput } from "../atoms/TextInput";
import { RadionSection } from "./RadioSection";

interface Form {
  name: string;
  age: string;
  species: string;
  gender: "male" | "female" | "";
  needs: DailyNeeds[];
}

interface DailyForm {
  resource_id: string;
  quantity: string;
}

export function AnimalForm({
  animalId,
  close,
}: {
  animalId?: string | null;
  close: () => void;
}) {
  const { q } = useAnimalFilters();

  const [form, setForm] = useState<Form>({
    name: q ? capitalize(q) : "",
    age: "",
    species: "",
    gender: "",
    needs: [],
  });

  const [dailyForm, setDailyForm] = useState<DailyForm>({
    resource_id: "",
    quantity: "",
  });

  const [resources, setResources] = useState<ResourceWithId[]>([]);

  // fetch animal data by id
  useEffect(() => {
    const fetchData = async () => {
      if (!!animalId) {
        const response = await fetch(
          `http://localhost:3030/api/animals/${animalId}`,
        );
        const body: AnimalWithId = await response.json();
        setForm({
          name: body.name,
          age: String(body.age),
          species: body.species,
          gender: body.gender,
          needs: body.dailyNeeds,
        });
      }
    };
    fetchData();
  }, [animalId]);

  //fetch resources
  const fetchData = async () => {
    const response = await fetch("http://localhost:3030/api/resources");
    const body: ResourceWithId[] = await response.json();
    setResources(
      body.sort((a, b) => {
        const textA = a.name.toUpperCase();
        const textB = b.name.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      }),
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const genderLabel = [
    { label: "male", value: "male" },
    { label: "female", value: "female" },
  ];

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof Form,
  ) => {
    if (field !== "age" || Number.isInteger(Number(e.target.value))) {
      setForm((ps) => ({ ...ps, [field]: e.target.value }));
    }
  };

  const handleDailyFormChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof DailyForm,
  ) => {
    if (field !== "quantity" || !Number.isNaN(Number(e.target.value))) {
      setDailyForm((ps) => ({ ...ps, [field]: e.target.value }));
    }
  };

  const handleAddDailyNeed = async () => {
    const response = await fetch(
      `http://localhost:3030/api/resources/${dailyForm.resource_id}`,
    );
    const body: ResourceWithId = await response.json();
    const newNeed: DailyNeeds = {
      resourceName: body.name,
      resource_id: body._id,
      quantity: Number(dailyForm.quantity),
      unit: body.unit,
    };
    setForm((ps) => ({ ...ps, needs: ps.needs.concat(newNeed) }));
    setDailyForm({
      resource_id: "",
      quantity: "",
    });
  };

  const handleSubmit = async () => {
    if (isFormFilled(form)) {
      const body: Animal = {
        name: form.name,
        age: Number(form.age),
        species: form.species,
        gender: form.gender as Animal["gender"],
        dailyNeeds: form.needs,
      };

      const url = !animalId
        ? "http://localhost:3030/api/animals"
        : `http://localhost:3030/api/animals/${animalId}`;

      const method = !animalId
        ? "POST"
        : "PATCH"

      const options = {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      };

      const response = await fetch(url, options);

      if (!response.ok) {
        console.log("TRATAR DE ERRO");
      } else {
        fetchData();
        close();
      }
    } else {
      alert("please filled all entries");
    }
  };

  return (
    <form className="rounded-xl px-14 py-10 bg-secundaryGreen z-50 flex flex-col">
      <h2 className="font-bold text-3xl text-center mb-5">
        {animalId ? "Edit Animal" : "Add New Animal"}
      </h2>
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
            disabled={!!animalId}
          />
          <TextInput
            className="!w-10 !bg-grayish"
            onchange={(e) => handleFormChange(e, "age")}
            value={form.age}
            id="age"
          />
          <Dropdown
            id="species"
            value={form.species}
            options={speciesOptions.map((e) => ({
              name: capitalize(e),
              value: e,
            }))}
            onchange={(e: ChangeEvent<HTMLSelectElement>) =>
              setForm((ps) => ({ ...ps, species: e.target.value }))
            }
          />
          <RadionSection>
            {genderLabel.map((e, i) => (
              <RadioBtn
                key={i.toString()}
                label={e.label}
                name="gender"
                value={e.value}
                checked={e.value === form.gender}
                id={e.value}
                onchange={(e) => handleFormChange(e, "gender")}
              />
            ))}
          </RadionSection>
          <div className="flex flex-wrap gap-1">
            {form.needs.map((e) => (
              <NeedDiv
                key={e.resource_id}
                name={`${e.quantity} ${e.unit} ${e.resourceName}`}
                onclick={() =>
                  setForm((ps) => ({
                    ...ps,
                    needs: ps.needs.filter(
                      (need) => need.resource_id !== e.resource_id,
                    ),
                  }))
                }
              />
            ))}
          </div>
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
            <Dropdown
              id="resource"
              value={dailyForm.resource_id}
              options={resources.map((e) => ({ name: e.name, value: e._id }))}
              onchange={(e: ChangeEvent<HTMLSelectElement>) =>
                setDailyForm((ps) => ({ ...ps, resource_id: e.target.value }))
              }
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
          onclick={handleAddDailyNeed}
        />
      </div>
      <div className="flex gap-2 justify-end">
      <SecundaryBtnS
        text={animalId ? "Edit" : "Add"}
        className="self-end mt-4"
        onclick={handleSubmit}
      />
      <MainBtnS text="Cancel" className="self-end mt-4" onclick={close} />
      </div>
    </form>
  );
}
