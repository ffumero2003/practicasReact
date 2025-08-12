function ProgressBar({title, percentage}){
  return(
    <div className="flex flex-col gap-1">
      <div className="flex justify-between gap-7">
        <p className="text-sm text-gray-400">{title}</p>
        <p className="text-sm text-gray-400">{percentage}</p>
      </div>
      <div className="w-[200px] h-8 bg-white">
        <div className=" h-8 bg-yellow-300 transition-all duration-700" style={{width: percentage}}></div>

      </div>

    </div>
  )
}

export default ProgressBar;