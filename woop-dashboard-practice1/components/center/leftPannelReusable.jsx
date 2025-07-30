import {ShoppingBagIcon, StarIcon, ChatBubbleLeftEllipsisIcon} from '@heroicons/react/24/solid';

function LeftPannelResusable({ icon: Icon, title, subheading, firstTime, secondTime }) {
  const color = 
    Icon === ShoppingBagIcon
    ? "text-blue-500"
    : Icon === StarIcon
    ? "text-yellow-500"
    : Icon === ChatBubbleLeftEllipsisIcon
    ? "text-orange-500"
    : "text-gray-500"

  return (
    <div className="flex p-2 border-b border-gray-200">
      <div className="w-1/5 flex justify-center items-center">
        <Icon className={`h-6 w-6 ${color} p-1 rounded-lg bg-gray-300 group-hover:text-white group-hover:bg-[#4267d6] transition-all duration-300`} />
      </div>
      <div className="w-3/5 flex flex-col items-start">
        <h3 className="font-bold text-base text-black">{title}</h3>
        <p className="text-xs text-gray-600">{subheading}</p>
      </div>
      <div className="w-1/5 flex flex-col items-center justify-center">
        <p className="text-xs font-bold text-black">{firstTime}</p>
        <p className="text-xs text-gray-500">{secondTime}</p>
      </div>
    </div>
  );
}


export default LeftPannelResusable;