import React from 'react'
import Taskbar from './taskbar'

const overview = () => {
  return (
    <>
    <div className=" flex flex-col md:flex-row gap-5">
    <div className="w-[660px]  flex flex-col">
    <div className="flex flex-row w-full h-[52px] items-center justify-between">
        <h1 className="text-base font-bold text-custom-black">Company Overview</h1>
        <button className="text-sm font-medium items-center text-custom-blue border border-light-pink py-2 px-4 rounded-lg">Today</button>
    </div>
    <div className="w-[660px] lg:w-full flex flex-wrap py-3 justify-between ">
    <div className="w-[320px] lg:w-2/4 h-[176px] col-span-2 flex flex-row rounded-2xl mb-3 items-center justify-center border border-light-pink">
      <div className="w-40 lg:w-2/4 h-44">
      <img className="w-full h-full p-4" loading="lazy" src="" />
      </div>
      <div className="w-40 lg:w-2/4 h-44 p-4 py-12 justify-center items-center ">
        <p className="font-medium text-base">Attendance</p>
        <p className="font-normal text-xs"><span className="font-semibold text-xs">95% Employees </span> are present at work today.</p>
      </div>
        </div>
        </div>
        </div>

        <Taskbar/>

        </div>
        </>
  )
}

export default overview