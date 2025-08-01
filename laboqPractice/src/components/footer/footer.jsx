import { faInstagram, faTwitter, faLinkedin, faPinterest, faGithub} from "@fortawesome/free-brands-svg-icons";
import Socials from "./socials";
import LaboqRights from "./laboqRIghts";


export default function Footer(){
  const socialBrands = [
    {icon: faInstagram},
    {icon: faTwitter},
    {icon: faLinkedin},
    {icon: faPinterest},
    {icon: faGithub}
  ]
  return(
    <div className="mt-5 border-t border-black">
      <div className="flex justify-between items-center mt-5 p-6">
        <LaboqRights />
        <div className="flex gap-2">
          {socialBrands.map(item => (
            <Socials icon={item.icon}/>
          ))}
        </div>
      </div>
      

    </div>
  )
}



