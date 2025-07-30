import { SunIcon } from "@heroicons/react/24/solid";
import OrangePannel from "./orangePannel";
import PurplePannel from "./purplePannel";
import LeftPannel from "./leftPannel";
import RightPannelTop from "./rightPannelTop";
import RightBottomPannel from "./rightBottomPannel";

function CenterMain(){
  return(
    <div className="h-screen bg-gray-100">
      
        <div className="flex justify-between items-center p-5">
          <h2 className="text-black font-bold">Hi, Maxim!👋</h2>
          <div className="w-14 h-8 bg-gray-200 rounded-full p-2 flex items-center">
            <div className="w-6 h-6 bg-white rounded-full shadow flex items-center justify-center">
              <SunIcon className="h-4 w-4 text-yellow-500"/>
            </div>
          </div>
        </div>

        <div className="flex m-4 gap-3">
          <div className="w-2/5 rounded-md">
            <OrangePannel />
          </div>
          <div className="w-3/5  rounded-md">
            <PurplePannel />
          </div>
        </div>


        <div className="flex m-4 gap-3">
          <div className="w-1/2">
            <LeftPannel />
          </div>
          <div className="w-1/2 flex flex-col gap-3">
            <RightPannelTop />
            <RightBottomPannel className="flex-1 overflow-y-auto"/>
          </div>
        </div>

     
    </div>
  )
}

export default CenterMain;