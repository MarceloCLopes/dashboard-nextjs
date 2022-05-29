import Image from "next/image";
import React from "react";

import avatarImg from "../../public/avatar.png";

export function Header() {
  return (
    <div className="flex flex-wrap h-[70px] bg-white ml-[200px] -md:w-full -md:ml-[70px]">
      <div className="flex justify-evenly items-center">
        <div className="ml-10">
          <h2 className="text-black">
            Hello, <span>Marcelo</span>
          </h2>
          <p className="text-black">Welcome to the board.</p>
        </div>
      </div>

      <div className="absolute right-5 mt-[15px] -md:right-1">
        <Image
          className=" rounded-[50%] cursor-pointer"
          src={avatarImg}
          alt="profile"
          width={45}
          height={45}
        />
      </div>
    </div>
  );
}
