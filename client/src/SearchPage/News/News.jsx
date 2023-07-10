import React from 'react'
import Card from './Card'


export default function News({data}) {
  return (
    <div className=" mt-9  w-[90%] mx-auto ">
      {data.map((data) => (
        <div ><Card data={data}/></div>
        
        
      ))}
      
    </div>
  )
}
