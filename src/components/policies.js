import React from 'react'
import Image from 'next/image'

const Policies = () => {
  const policiesName=[
    {
      id: "company policy",
      name:"Company Policy",
    },
    {
      id: "hr policy",
      name:"HR Policy",
    },
  ]
  return (
    <>
      <div className="w-[660px]">
        <h1 className="text-base font-bold py-5">Policies</h1>
      </div>
      <div className="flex md:flex-row flex-col gap-5">
      {policiesName.map((policiesName,i)=>(      
      <div key={i} className="flex flex-row justify-around w-[320px] h-[71px] bg-lightwhite border items-center border-gray-300 rounded-xl overflow-hidden">
        <img className="w-5 h-5" loading="lazy" src="/documentlogo.png" />
        <span className="flex flex-col py-2">
          <p className="text-base font-medium">{policiesName.name}</p>
          <a className="text-blue-600 text-xs font-medium">
            Read Document
          </a></span>
        <img className="w-5 h-5" loading="lazy" src="/linklogo.png" />

      </div>
      ))}
      </div>
    </>
  )
}

export default Policies