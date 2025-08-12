export default function TituloSubtitulo({titulo, subtitulo}){
  return(
      <div className="flex flex-col gap-2">
          <h1 className=" text-4xl font-bold">{titulo}</h1>
          <p>{subtitulo}</p>
        </div>
  
  )
}