"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

function Logo({}: Props) {
  const router = useRouter();

  return (
    <div 
      onClick={() => router.push("/")} 
      className="flex items-center gap-2 cursor-pointer group"
    >
      <Image
        alt="logo"
        className="hidden md:block cursor-pointer"
        height="100"
        width="100"
        src="/logo.png"
      />
      <div className="flex items-center">
        <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent hover:from-pink-600 hover:to-rose-500 transition-all duration-300">
          Stay
        </span>
        <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent hover:from-orange-500 hover:to-pink-600 transition-all duration-300">
          Yatra
        </span>
      </div>
    </div>
  );
}

export default Logo;