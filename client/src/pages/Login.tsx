import { LoginForm } from "../components/LoginForm";

export function Login() {
  return (
    <div className="py-6 px-[10vw] sm:px-[20vw] md:px-[25vw]">
      <h1 className="mb-6 font-heading font-bold text-grayish text-6xl text-center">
        WildScape
      </h1>
      <LoginForm />
    </div>
  );
}
