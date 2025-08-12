import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';
import ImageInformation from '../components/contact/imageInformation';
import Inputs from '../components/contact/inputs';
import Message from '../components/contact/message';
import TextAreaButton from '../components/contact/textAreaButton';

function Contact(){

  const contactInput = [
    {icon: faUser, placeholder: "Name"},
    {icon: faEnvelope, placeholder: "e-mail"},
    {icon: faLink, placeholder: "website"}
  ]

  return(
    <div className="flex flex-col  items-center p-10 gap-4 ">
      <div className="flex flex-col items-start w-2/3 gap-2">
        <ImageInformation />
        <Message mess=""/>
        <div className="flex  w-full gap-3">
          <div className="flex flex-col w-1/3 gap-2">
            {contactInput.map(item =>{
              return <Inputs icon={item.icon} placeholder={item.placeholder}/>
            })}
          </div>
          <div className='w-2/3'>
            <TextAreaButton />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Contact;