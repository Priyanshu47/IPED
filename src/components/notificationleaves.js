import React from 'react'

const notificationleaves = () => {
  return (
    <div className='w-[1060px] h-[66px] mx-4 my-4 px-5 gap-5 rounded-2xl shadow font-medium border text-base absolute flex flex-row items-center justify-between'>
        <p>You were Absent on January 27</p>
        <div className='flex gap-4'>
            <button className='text-sm text-custom-blue font-semibold gap-1'>Apply Leave</button>
            <button className='text-sm border p-2 border-custom-blue font-semibold text-custom-blue rounded-lg '>Apply On Duty</button>
        </div>
    </div>
  )
}

export default notificationleaves