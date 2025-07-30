import React from "react";
import ColoredHeader from "./headerColoredPannels"
import orange from '../../src/assets/orangeContainer.png'

function OrangePannel(){
  return(
    <div className="bg-[#ffede0] shadow-lg">
      <ColoredHeader h2Heading="Income" customColor = " border-b-2 border-transparent hover:border-orange-500 transition-all duration-700" liColor="text-orange-400 hover:text-orange-500"/>
      <div className="flex justify-center items-center py-5">
        <div className=" h-52 w-52 rounded-full flex items-center justify-center bg-orange-300">
          <div className=" w-36 h-36 rounded-full m-4 flex flex-col justify-center items-center bg-[#ffede0]">
            <h5 className="text-black font-bold text-lg">100 000</h5>
            <p className="text-black text-md">150 000</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default OrangePannel