import React from 'react'
import Card from './Card'
import { dataImg } from "../../Data/Images";

export default function Img({data}) {
  return (
    <div className=" mt-9 flex w-[90%] mx-auto flex-wrap">
      {data.map((data) => (
        <div ><Card data={data}/></div>
      ))}
      {data.map((data) => (
        <div ><Card data={data}/></div>
      ))}
      {data.map((data) => (
        <div ><Card data={data}/></div>
      ))}
    </div>
  )
}
