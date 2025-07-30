function RightPannel(){

  const arr = [
    {
      image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      date: "24.03.2022. 16:00",
      title: "Card Title",
      percentage: "10%",
      num: "03",
      outOf: "30"
    },
    {
      image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      date: "24.03.2022. 18:00",
      title: "Contemporary art",
      percentage: "82%",
      num: "14",
      outOf: "21"
    },
    {
      image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      date: "24.03.2022. 20:00",
      title: "Collage as it is.",
      percentage: "67%",
      num: "13",
      outOf: "18"
    },
  ]


  return(
    <div className="flex flex-col  h-screen py-4">
      <div className="flex flex-col justify-center items-center p-1 pb-10">
        <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" className="h-20 w-20" />
        <h3 className="font-bold text-xl text-black">Maxim</h3>
        <p className="text-sm text-gray-400">Experienced Guide</p>
      </div>

      <div className="pb-10 m-4">
        <img src="https://www.sketchappsources.com/resources/source-image/calendar-widget-kristapselsins.png" alt="" />
      </div>

      <div>
        {arr.map(item =>{
          return <ReusableRight image={item.image} date={item.date} title={item.title} percentage={item.percentage} num={item.num} outOf={item.outOf}/>
        })}
      </div>
      
    </div>

    
  )
}


function ReusableRight({image, date, title, percentage,num, outOf}){
  return(
    <div className="flex p-2 text-black shadow-lg gap-2 m-2">
      <div>
        <img src={image} className="h-14 w-auto rounded-lg " />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-xs ">{date}</p>
        <h4 className="text-sm font-bold">{title}</h4>
        <div className="flex justify-start items-center gap-2">
          <p className="text-xs">{percentage}</p>
          <div className="w-10 h-2 rounded-lg bg-gray-300">
            <div className="rounded-lg h-2 bg-blue-500" style={{width: percentage}}></div>
          </div>
          <p className="text-xs">{num}<span className="text-gray-400">/{outOf}</span></p>
        </div>
      </div>

    </div>
  )
}

export default RightPannel;