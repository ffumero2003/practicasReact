import LeftPannel from "../components/left pannel/leftPannel"
import RightSide from "../components/page1/righSide"

export default function Home(){
  return(
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="w-1/6  h-full">
        <LeftPannel />
      </div>
      <div className="w-5/6 h-full">
        <RightSide />
      </div>
      
    </div>
  )
}