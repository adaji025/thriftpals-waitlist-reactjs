import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Success = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#2B00E90D]/5 min-h-screen relative">
      <Header />
      <div className="absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center">
        <h2 className="text-2xl font-medium text-center">
          Thanks for subscribing, every update comes to you first!!!.
        </h2>
        <button
          className="mt-2 font-bold underline text-[#190087] hover:scale-105 transition-all duration-300"
          onClick={() => navigate("/")}
        >
          Go back to home page
        </button>
      </div>
    </div>
  );
};

export default Success;
