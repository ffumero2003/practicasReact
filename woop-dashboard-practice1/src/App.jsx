import Woop from "../components/leftPannel/woop"
import CenterMain from "../components/center/mainCenter"
import RightPannel from "../components/rightPannel/rightPannel"

function App() {
  

  return (
    <div className="flex w-screen border border-black">
      <div className="w-2/12">
        <Woop />
      </div>
      <div className="w-7/12">
        <CenterMain />
      </div>
      <div className="w-3/12">
        <RightPannel />
      </div>
    </div>
  )
}

export default App
 