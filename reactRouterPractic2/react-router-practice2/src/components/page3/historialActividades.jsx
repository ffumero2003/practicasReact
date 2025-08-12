import {  faWaveSquare  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function HistorialActividades({arr}){
  return(
    <>
      <div className='flex items-center text-3xl gap-1 mt-10'>
          <FontAwesomeIcon icon={faWaveSquare} />
          <h1 className='font-bold'>Historia de Actividades</h1>
      </div>
    
      <div className='flex flex-col gap-5 mt-5'>
        {arr.map(({icono, title, subTitle, para, color, bg}, i) => {
          return(
                 <div key={i} className='border p-3'>
                   <div className='flex justify-between'>
    
                    <div className='flex gap-2'>
                      <FontAwesomeIcon icon={icono} className={`${bg} ${color} text-3xl rounded-lg p-2`}/>
                      <div className='flex flex-col'>
                          <h2 className='font-bold text-lg'>{title}</h2>
                          <p>{subTitle}</p>
                      </div>
                    </div>
    
                    <div>
                      <p>hace 3 dias</p>
                    </div>
    
                  </div>
    
                  <div className='p-8'>
                    <p>{para}</p>
                  </div>
    
                    
                  </div>
                )
              })}
    
        </div>
    </>
  )
}

export default HistorialActividades;