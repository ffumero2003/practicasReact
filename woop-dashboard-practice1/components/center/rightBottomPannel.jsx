function RightBottomPannel({ className = "" }){
  const users = [
    {icon: "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png", name: "Jenny Wilson", message:"It was the best tour of my life😂"},
    {icon: "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png", name: "Darlene Robertson", message:"When will we repeat the trip? I'm lookin forw..."},
    {icon: "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png", name: "Jenny Wilson", message:"It is possible to book a tour without"},
    {icon: "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png", name: "Theresa Webb", message:"See You!"},


  ]
  return(
    <div className={`bg-white rounded-lg shadow-lg p-2  ${className}`}>
      {users.map(user => {
        return <ReusablePannel icon={user.icon} name={user.name} message={user.message}/>
      })}
    </div>
  )
}

function ReusablePannel({icon, name, message}){
  return(
    <div className="flex p-2 bg-white shaow-lg rounded-lg pb-4">
      <div className="w-1/6  flex justify-center items-center">
        <img src={icon}  className="h-10 w-10"/>
      </div>
      <div className="w-5/6 ">
        <div className="flex flex-col justify-start items-start ml-2 ">
          <h4 className="text-base font-bold text-black">{name}</h4>
          <p className="text-xs text-gray-400">{message}</p>
        </div>
      </div>
    </div>
  )
}

export default RightBottomPannel;