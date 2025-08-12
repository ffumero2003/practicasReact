export default function Estado({arr}){
  return(
    <>
      <h3 className='text-gray-400'>ESTADO DEL SISTEMA</h3>
        {arr.map(({texto, num, color, colorTexto}, i) => (
          <button key={i} className='flex justify-between items-center w-full mb-1'>
            <h4>{texto}</h4>
            <div className={`p-1 rounded-full h-6 w-6 ${color} ${colorTexto} flex  justify-center items-center`}>
              <p>{num}</p>
            </div>
          </button>
        ))}
    </>
  )
}