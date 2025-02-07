import { useState } from "react";
import { MainBtn } from "./MainBtn";
import { TextInput } from "./TextInput";

export function LoginForm() {
  const [state, setState] = useState({ employeeNr: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, p: string) => {
    if (p === "employeeNr" && Number.isNaN(Number(e.target.value))) {
      return;
    }
    setState((ps) => ({ ...ps, [p]: e.target.value }));
  };

  const handleLogIn = () => {
    // convert employeeNr to Number before post
    console.log(state)
  }

  return (
    <form className="bg-grayish py-11 px-16 rounded-3xl flex flex-col items-center gap-10">
      <h2 className="text-4xl text-center">Login</h2>
      <div className="flex flex-col gap-2 w-full">
        <TextInput
          placeholder="EmployeeNr"
          value={state.employeeNr}
          onchange={(e) => handleChange(e, "employeeNr")}
        />
        <TextInput
          placeholder="Password"
          value={state.password}
          onchange={(e) => handleChange(e, "password")}
          password={true}
        />
      </div>
      <MainBtn text="Login" className="w-full rounded-full" onclick={handleLogIn} />
    </form>
  );
}
