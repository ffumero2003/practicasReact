import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Updates({stats}){
  return( 
    <div className="w-full py-3  flex gap-3 mt-5">
            {stats.map(({icon, num, text, textColor, bg}, i) => {
              return(
                <div key={i} className={`${bg} p-8 flex  w-1/4 items-center rounded-lg gap-3`}>
                  <FontAwesomeIcon icon={icon}  className={`${textColor} text-5xl`}/>
                  <div className="flex flex-col justify-start">
                    <h1 className={`${textColor} text-2xl font-bold`}>{num}</h1>
                    <p className={`${textColor}`}>{text}</p>
                  </div>
    
                </div>
              )
            })}
          </div>
  )
}

export default Updates;