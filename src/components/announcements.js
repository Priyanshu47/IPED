import React from 'react'

const Announcements = () => {
  const data=[
    {
        time:'5 Minutes ago',
        text:'Outing schedule for every departement',
    },
  ]
  return (
    <div class='h-[100px] overflow-hidden w-full'>
        { 
            data.map((value,Index)=>{
                  return(       
    <div key={Index} class="bg-white rounded-md border border-gray-300 px-4 py-3" role="alert">
        <p class="text-sm font-semibold text-custom-blue">Announcements</p>
        <h1 class="text-base">{value.text}</h1>
        <p class="text-xs font-normal">{value.time}</p>
    </div>
        )})
      }
    </div>
      )
}
export default Announcements