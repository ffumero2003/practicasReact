import FotoTexto from '../fotoTexto'

export default function DatosSemanalesDos({arr}){
  return(
    <>
      {arr.map(({icono, text,num, confirmation, bgColor, textColor}, i) => {
        return(
         <div key={i} className={`${bgColor} flex flex-col justify-center items-start p-3 rounded-lg w-1/3 gap-2`}>
            <div className='flex justify-center items-center gap-2'>
              <FotoTexto icono={icono} texto={text} color={textColor} size="text-md"/>
            </div>
            <div>
              <h1 className={`${textColor} text-3xl font-bold`}>{num}</h1>
            </div>
            <div>
              <p className={`${textColor}`}>{confirmation}</p>
            </div>
          </div>
          )
      })}
    </>
  )
}