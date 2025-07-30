import React from "react";



function PannelItem({icon: Icon, label}){
  return(
    <div className="group flex justify-start items-center gap-1 ">
      <Icon className="h-6 w-6 text-gray-500 p-1 rounded-lg bg-gray-300 group-hover:text-white group-hover:bg-[#4267d6] transition-all duration-300" />
      <h4 className="text-base text-gray-500 group-hover:text-[#4267d6] transition-all duration-300">{label}</h4>
    </div>
  )
}

export default PannelItem;



