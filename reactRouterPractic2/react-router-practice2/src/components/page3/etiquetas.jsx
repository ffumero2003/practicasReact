import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'

function Etiquetas({ items }) {
  return (
    <div className='mt-5 p-2'>
      <h4 className='text-gray-500'>Etiquetas</h4>
      <div className='flex gap-3 mt-3'>
        {items.map((item, i) => (
          <div key={i} className='flex justify-center items-center gap-1'>
            <FontAwesomeIcon icon={faTag} />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Etiquetas
