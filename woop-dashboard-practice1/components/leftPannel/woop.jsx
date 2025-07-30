// left pannel
import React from "react";
import logo from "../../src/assets/woopLogo.png"
import {HomeIcon, GlobeAltIcon, BookmarkIcon, CircleStackIcon, ChatBubbleBottomCenterTextIcon, BellIcon, CalendarDaysIcon, ArrowRightEndOnRectangleIcon} from "@heroicons/react/24/outline";
import PannelItem from "./pannel";


const items = [
  {icon: HomeIcon, label:"Home"},
  {icon: GlobeAltIcon, label:"Excursion"},
  {icon: BookmarkIcon, label:"Booking"},
  {icon: CircleStackIcon, label:"Finance"},
]

const secondaryItems = [
  {icon: ChatBubbleBottomCenterTextIcon, label:"Message"},
  {icon: BellIcon, label:"Notifications"},
]

function Woop(){
  return(
    <div className="flex flex-col justify-between items-center h-screen py-4">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className=" w-3/4 flex flex-col gap-4 py-2 m-3">
        {items.map((item, i) => (
          <PannelItem key={i} icon={item.icon} label={item.label} />
        ))}
      </div>
      <hr className="w-3/4  border-gray-300"/>
      <div className=" w-3/4 flex flex-col gap-4 py-2 m-3">
        {secondaryItems.map((item, i) => {
          return <PannelItem key={i} icon={item.icon} label={item.label} /> 
        })}
      </div>

      <div className="flex flex-col justify-center items-center bg-gray-300 m-3 p-4 px-8 rounded-lg ">
        <CalendarDaysIcon className="h-30 w-30 text-purple-300"/>
        <h4 className="text-black font-bold ">Create</h4>
        <h4 className="text-black font-bold pb-4">new excursion</h4>
        <button className="text-white bg-[#2e5bff] text-sm ">Create</button>

      </div>

      <div className="flex justify-center items-center gap-2">
       <ArrowRightEndOnRectangleIcon className="h-8 w-8 text-black bg-gray-300 p-1 rounded-lg"/>
       <a href="#" className="text-black text-lg">Exit</a>

      </div>
      
    </div>
  )
}


export default Woop;