import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export default function NuevoItem({arr}){
  return(
    <div className='grid grid-cols-2 gap-1 p-3'>
      {arr.map(({ label, icon, bg, hover, path }, i) => (
          <Link to={path} key={i} className={`flex flex-col items-center justify-center gap-2 ${bg} text-white rounded-lg py-6 ${hover} transition`} >
              <FontAwesomeIcon icon={icon} className='text-2xl'/>
              <span>{label}</span>
          </Link>
        ))}
    </div>
  )
}