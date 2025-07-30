import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCloudMoonRain, faThumbsUp } from '@fortawesome/free-solid-svg-icons'; 

function RightPannelTop(){
  return(
    <div className="flex justify-around items-center gap-3">
      <div className='text-black shadow-lg w-1/2  bg-white rounded-lg flex flex-col justify-center items-start p-2 gap-1'>
        <FontAwesomeIcon icon={faCloudMoonRain} className='h-12 w-12 text-yellow-400'/>
        <div className='flex flex-col justify-start'>
          <h4 className='font-bold text-lg'>Costa Rica</h4>
          <p className='text-xs text-gray-500'>Partly cloudy</p>
        </div>
      </div>

      <div className='text-black shadow-lg w-1/2  bg-white rounded-lg flex flex-col justify-center items-start p-2 gap-1'>
        <FontAwesomeIcon icon={faThumbsUp} className='h-12 w-12 text-yellow-500'/>
        <div>
          <h4 className='font-bold text-lg m-0'>4.9</h4>
          <p className='text-xs text-gray-500'>Average Rating</p>
        </div>
      </div>
    </div>
  )
}

export default RightPannelTop;