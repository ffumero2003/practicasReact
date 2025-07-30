import {ShoppingBagIcon, StarIcon, ChatBubbleLeftEllipsisIcon} from '@heroicons/react/24/solid';
import LeftPannelResusable from './leftPannelReusable';


const items = [
  {icon: ShoppingBagIcon, title:"+500", subheading:"Night history walk", firstTime:"24.03", secondTime:"12.09" },
  {icon: StarIcon, title:"Score 5. Congratulations!", subheading:"Under the sky of the universe", firstTime:"24.03", secondTime:"10.37"},
  {icon: ChatBubbleLeftEllipsisIcon, title:"New Review", subheading:"Under the sky of the universe", firstTime:"24.03", secondTime:"09.54"},
  {icon: StarIcon, title:"Score 4. Congratulations!", subheading:"Life BC", firstTime:"22.03", secondTime:"11.23"},
  {icon: ChatBubbleLeftEllipsisIcon, title:"New Review", subheading:"Life BC", firstTime:"22.03", secondTime:"07.09"},
  {icon: ShoppingBagIcon, title:"+200", subheading:"Night history walk", firstTime:"22.03", secondTime:"07.09"}
]

function LeftPannel(){
  return(
    <div className="bg-[#ffffff] rounded-lg shadow-lg">
      <div className="flex justify-center gap-3">
        <a href="#"><li className="text-gray-500 list-none px-2  hover:border-b-4 hover:border-blue-400 mt-8 transition-all duration-500">All</li></a>
        <a href="#"><li className="text-gray-500 list-none px-2  hover:border-b-4 hover:border-blue-400 mt-8 transition-all duration-500">Booking</li></a>
        <a href="#"><li className="text-gray-500 list-none px-2  hover:border-b-4 hover:border-blue-400 mt-8 transition-all duration-500">Rating</li></a>
        <a href="#"><li className="text-gray-500 list-none px-2   hover:border-b-4 hover:border-blue-400 mt-8 transition-all duration-500">Reviews</li></a>
      </div>
      
      {items.map((item, i) => (
              <LeftPannelResusable
        key={i}
        icon={item.icon}
        title={item.title}
        subheading={item.subheading}
        firstTime={item.firstTime}
        secondTime={item.secondTime}
      />

      ))}

    </div>
  )
}

export default LeftPannel;