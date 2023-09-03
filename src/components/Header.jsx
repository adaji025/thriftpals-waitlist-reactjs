import React from "react";
import Logo from "../assets/thriftpals-logo.svg"

const Header = () => {
  return (
    <div className="flex justify-between items-center max-w-[1200px] mx-auto py-8 px-4 z-10">
      <img src={Logo} className="w-[110px] xs:w-[150px]" alt="thriftpals" />
      <button className="text-xs xs:text-base border border-[#190087] px-6 py-2 rounded-md text-[#190087] transition-all duration-300 hover:scale-105">
        Get started
      </button>
    </div>
  );
};

export default Header;
