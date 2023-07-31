"use client";
import Login from "@/components/Login";
import Signup from "@/components/Signup";
import { useState } from "react";
export default function Home() {
  const [isLoginVisible, setLoginVisible] = useState(true);
  const [message, setMessage] = useState("SignUp");

  const handleClick = () => {
    setLoginVisible(!isLoginVisible);
    setMessage(isLoginVisible ? "LogIn" : "SignUp");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <button
        className="mt-20 mb-5 bg-blue-100 hover:bg-blue-50 p-2 border border-blue-200 rounded-xl"
        onClick={handleClick}
      >
        {message}
      </button>
      {isLoginVisible ? <Login /> : <Signup />}
    </div>
  );
}
