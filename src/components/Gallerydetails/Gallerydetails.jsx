import axios from "axios";
import { useEffect, useState } from "react";
import Newusers from "../Newusers/Newusers";
import "./Gallerydetails.css"


function Gallerydetails({ userName }) {
  const [details, setDetails] = useState([]);

  let data = `https://api.github.com/search/users?q=${userName}`;
  console.log(data);

  async function getdata() {
    let response = await axios.get(data);
    // console.log("res",response)
    //  console.log("r",response.data.items)
    setDetails(response.data.items);
  }

  useEffect(() => {
    getdata();
  }, []);
  // console.log("d", details);
  return (
    <div className="newparent">
      {
      details.map((p) => (
        p?<Newusers key={p.id} name={p.login} avatar={p.avatar_url} />:<h1 key="">something went wrong</h1>
      ))
      }
    </div>
  );
}

export default Gallerydetails;
