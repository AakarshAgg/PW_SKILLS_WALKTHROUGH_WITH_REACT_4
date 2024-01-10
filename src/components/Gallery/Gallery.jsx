import axios from "axios";
import { useEffect, useState } from "react";
import Users from "../Users/Users";
import "./Gallery.css"

function Gallery() {
  const [users, setUsers] = useState([]);

  async function getResponse() {
    try {
      const response = await axios.get("https://api.github.com/users");
      //console.log(response)
      //console.log(response.data)
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getResponse();
  }, []);

  //console.log("use", users);
  return (
    <div className="display">
   {
     users.map((p) => (
     p?<Users key={p.id} name={p.login} avatar={p.avatar_url} />:<h1 key="">something went wrong</h1>
   ))
   }
    </div>
  );
}

export default Gallery;
