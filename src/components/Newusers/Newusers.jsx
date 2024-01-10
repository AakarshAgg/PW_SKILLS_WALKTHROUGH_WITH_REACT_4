import "./Newusers.css"

function Newusers({name,avatar}){
    return(
        <div className="newchild">
        <img src={avatar}/>
        <p>{name}</p>        
        </div>
    )
}

export default Newusers