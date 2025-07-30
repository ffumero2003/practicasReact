
import ColoredHeader from "./headerColoredPannels";
import SmoothChart from "./purpleChart";

function PurplePannel(){
  return(
    <div className="bg-[#ecf0ff] shadow-lg">
      <ColoredHeader h2Heading="Workload" customColor = " border-b-2 border-transparent hover:border-[#667fce] transition-all duration-700" liColor="text-[#9fb3fd] hover:text-[#667fce]"/>
      <SmoothChart />
    </div>
  )
}

export default PurplePannel;