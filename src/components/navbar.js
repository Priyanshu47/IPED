import React from 'react'
import Image from "next/image"
import DefaultENG from "@/Assest/Languages/defaulttext"

const nav = () => {
  return (
    <div className="w-full h-20 px-12 py-2.5 border border-black border-opacity-10 justify-between inline-flex">
        <Image src="/LOGO.png" width={80} height={80} alt="LOGO" />
        <button
          type="button"
          className="text-custom-blue px-8 my-2 bg-opacity-10 rounded-3xl border border-blue-950 bg-blue-900 justify-center items-center text-base font-bold font-Mulish leading-none"
        >
          {DefaultENG.Login_Page.contacts}
        </button>
      </div>
  )
}

export default nav