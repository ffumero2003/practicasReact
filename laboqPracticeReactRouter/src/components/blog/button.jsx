function Button(){
  return(
    <>
      <button className="p-4 bg-gray-300 hover:bg-yellow-300 transition-all duration-400">OLDER POSTS</button>
    </>
  )
} 

function ButtonCards(){
  return(
    <>
      <button className="bg-yellow-300 hover:bg-yellow-400 transition px-4 py-2 text-black font-medium w-fit">
        READ MORE
      </button>
    </>
  )
}

export  {Button , ButtonCards};

