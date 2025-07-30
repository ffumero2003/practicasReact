

function ColoredHeader({h2Heading,customColor, liColor}){
  return(

    <div className="flex justify-between p-2">
      <div className="font-bold">
        <h2 className="text-black">{h2Heading}</h2>
      </div>
      <div className="flex list-none gap-2">
        <a href="#" className={customColor}><li className={liColor}>Day</li></a>
        <a href="#" className={customColor}><li className={liColor}>Week</li></a>
        <a href="#" className={customColor}><li className={liColor} >Month</li></a>
      </div>

    </div>
  
  )
}

export default ColoredHeader;