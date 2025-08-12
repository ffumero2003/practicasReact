import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
export default function Navigation({arr}){
  return(
    <>
    <h3 className='text-gray-400'>NAVEGACION</h3>
        {arr.map(({icon, text, path}, i) => {
          const content = (
          <button key={i} className='group  flex w-full items-center p-2 gap-1 rounded-lg hover:shadow-lg hover:bg-blue-200  transition-all duration-400 cursor-pointer'>
            <FontAwesomeIcon icon={icon} className='group-hover:text-blue-600 transition-all duration-400'/>
            <h4 className='group-hover:text-blue-600 transition-all duration-400'>{text}</h4>
          </button>)

          return path ? (
            <Link key={i} to={path}>
              {content}
            </Link> 
          ) : (
            <div key={i}>
              {content}
            </div>
          )
        })}
      </>
  )
}