import ImageDescription from "../components/about/imageDescription"
import Services from "../components/about/services"
import ProgressBar from "../components/about/progressBar"

function About(){

  const skills = [
    {title: 'Website Design', percentage: "71%"},
    {title: 'Photoshop', percentage: "85%"},
    {title: 'Wordpress', percentage: "76%"},
    {title: 'Plugins', percentage: "53%"},
  ]

  return(
    <div className="flex justify-center items-stretch px-10 gap-6">
      <ImageDescription />
      <div className="w-1/5 flex flex-col gap-3 p-3 ">
        <Services />
        <div className="bg-gray-200 w-full p-5">
          <div className="flex flex-col items-start gap-5">
            <h3 className="text-2xl">My Skills</h3>
              {skills.map(item => {
                return <ProgressBar title={item.title} percentage={item.percentage}/> 
              })}
          </div>
        </div>

      </div>
    </div>
  )
}



export default About;