"use client";

import React from "react";
import space from './img/space-pfp.jpg';
import { TextGenerateEffect } from "./ui/TextGenerate";

const Navbar = () => {
  return (
    <div className="h-[10vh] w-[100vw] bg-black-400 flex items-center justify-between px-4 mx-11 shadow-[0_4px_20px_rgba(0,191,255,0.8)] z-10 relative">
      <TextGenerateEffect
        className="text-center text-3xl"
        words="Welcome, Shrut"
      />

      <div className="flex w-[20vw] items-center justify-end gap-3">
        {/* Profile Picture */}
        <img
          src={space.src}
          alt="Profile"
          className="w-16 h-16 rounded-full object-cover border-2 border-[#C0C0C0]"
        />
        
        {/* Sign Out Button */}
        <h1 className="text-blue-600 cursor-pointer text-xl">
          Sign Out
        </h1>
      </div>
    </div>
  );
};

export default Navbar;

