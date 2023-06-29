import React from 'react'
import { dataNews } from '../../Data/News'
import Card from './Card'


export default function News() {
  return (
    <div className=" mt-9  w-[90%] mx-auto ">
      {dataNews.map((data) => (
        <div ><Card data={data}/></div>
        
        
      ))}
      
    </div>
  )
}
