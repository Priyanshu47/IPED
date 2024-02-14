"use client";

import { GlobalContext } from "@/context";

import { useContext, useEffect } from "react";

export default function Header() {
  const { sideBarOpen, setSideBarOpen } = useContext(GlobalContext);

  return (
    <header className="sticky top-0 z-999 flex w-full bg-white">
      <div className="flex flex-grow items-center gap-2 justify-between md:justify-end py-4 px-4 shadow md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <button className="inline-flex items-center justify-center rounded-sm bg-black px-2 py-1 text-sm text-white font-normaltracking-wide ">
            {sideBarOpen ? "Hide Sidebar" : "opensidebar"}
          </button>
        </div>
        <div className="flex gap-2">
       <div className="w-6 h-6 jus rounded-full bg-custom-blue"></div>
        <h1 className="text-base font-normal">
          Hi, Nicholas
        </h1>

        </div>
      </div>
    </header>
  );
}