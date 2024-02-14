import React from 'react'

const taskbar = () => {
  const data=[
    {
        time:'1.30 pm | January 29, 2024',
        title:'Rajat from Finance raised a leave request.',
    },
    {
      time:'1.30 pm | January 29, 2024',
      title:'Rajat from Finance raised a leave request.',
  },
  ]
  return (
    
    <div className="w-[360px] h-[416px] text-white bg-custom-blue rounded-lg overflow-hidden shadow-lg">
       <h1 className="bg-custom-lightblue p-3 text-base justify-center h-[52px]">Tasks</h1>
       
          { 
            data.map((value,Index)=>{
                  return(
                    <div key={Index} className="px-3 py-2">
                    <p  className="text-xs font-normal ">{value.time}</p>
        <h1 className="text-bases">{value.title}</h1>
        <button className="w-24 h-9 my-2 text-custom-blue text-sm font-semibold rounded-lg bg-white">Take Action</button>   
        </div>
                  )})
        }
        
        
 
</div>
  )
}

export default taskbar