import React from 'react'
import Card from './Card'
import { dataImg } from "../../Data/Images";

export default function Img() {
  return (
    <div className=" mt-9 flex w-[90%] mx-auto flex-wrap">
      {dataImg.map((data) => (
        <div ><Card data={data}/></div>
      ))}
      {dataImg.map((data) => (
        <div ><Card data={data}/></div>
      ))}
      {dataImg.map((data) => (
        <div ><Card data={data}/></div>
      ))}
    </div>
  )
}
