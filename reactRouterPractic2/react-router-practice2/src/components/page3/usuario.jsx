function Usuario({nombre, posicion, label, inicial}){
  return(
    <div className='flex flex-col justify-center items-center mt-10  '>
          <div className='h-20 w-20 bg-blue-500 flex justify-center items-center rounded-full'>
            <h1 className='text-3xl text-white'>{inicial}</h1>
          </div>
          <div className='flex flex-col gap-1 justify-center items-center'>
            <h3 className='font-bold mt-3 text-xl'>{nombre}</h3>
            <h5 className='text-gray-500'>{posicion}</h5>
            <div className='px-1 bg-yellow-200 rounded-lg'>
              <p className='text-yellow-600'>{label}</p>
            </div>
          </div>
    </div>
  )
}

export default Usuario