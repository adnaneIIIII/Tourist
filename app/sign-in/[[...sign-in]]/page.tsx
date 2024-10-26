import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex bg-white z-90 h-screen justify-center items-center">
      <SignIn />
    </div>
  );
}
