import React from 'react'

const over = () => {
  return (
    <div className='text-base font-bold'>
        January Overview
    <div className="w-[1060px]  flex flex-row py-3 justify-between col-span-5">
    <div className="w-[404px] h-[178px] col-span-2 flex flex-row items-center justify-center border border-light-pink">
      <div className="w-40 lg:w-2/4 h-44">
      <img className="w-full h-full p-4" loading="lazy" src="" />
      </div>
      <div className="w-40 lg:w-2/4 h-44 p-4 py-12 justify-center items-center ">
        <p className="font-medium text-base">Attendance</p>
        <p className="font-normal text-xs">Your average attendance for this month was <span className="font-semibold text-xs">95%</span></p>
      </div>
        </div>
        <div className='w-[163px] h-[178px] flex-col bg-slate-100 flex items-center justify-center'>
           <h1 className='text-xl'> 31 </h1>
           <p className='text-xs font-medium'> day in January </p>
        </div>
        <div className='w-[163px] h-[178px] flex-col bg-lime-100 flex items-center justify-center'>
           <h1 className='text-xl'> 22 </h1>
           <p className='text-xs font-medium'> Total Working Days </p>
        </div>
        <div className='w-[163px] h-[178px] flex-col bg-red-100 flex items-center justify-center'>
           <h1 className='text-xl'> 2 </h1>
           <p className='text-xs font-medium'> Leaves Taken </p>
        </div>
        <div className='w-[163px] h-[178px] flex-col bg-orange-100 flex items-center justify-center'>
           <h1 className='text-xl'> 1 </h1>
           <p className='text-xs font-medium'> Pending Approval </p>
        </div>
        </div>
    </div>
  )
}

export default over