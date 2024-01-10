import useDebounce from"../Hooks/useDebounce"
import "./Search.css"

function Search({updateSearchTerm}){
    const debounceCallback=useDebounce((e)=>updateSearchTerm(e.target.value))
    return(
   <div className="input-search">
   <input
   type="text"
   placeholder="Enter Username...."
   onChange={debounceCallback}
   />
   </div>
    )
}

export default Search