import "./Users.css"

function Users({name,avatar}){
   console.log("y",name,avatar)
   return(
    <div className="user">
        <img src={avatar}/>
        <p>{name}</p>        
    </div>
   )
}

export default Users