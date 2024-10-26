import { SignUp } from "@clerk/nextjs";
import React from "react";

export default function SignupPage() {
  return (
    <div className="flex bg-white z-90 h-screen justify-center items-center">
      <SignUp />
    </div>
  );
}
