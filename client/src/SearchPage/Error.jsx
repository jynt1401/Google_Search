import React from "react";
import { Audio } from "react-loader-spinner";

export default function Error() {
  return (
    <div className=" mt-[150px] w-[50%] mx-auto  sm:ml-20 m-2 p-2 h-[300px] ">
      <div className="w-[50%] mx-auto flex flex-row-reverse"><Audio
        height="100"
        width="100"
        radius="1"
        color="black"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      /></div>
      <div className="w-[50%] font-bold mx-auto flex flex-row-reverse"> Please Wait</div>
    </div>
  );
}
