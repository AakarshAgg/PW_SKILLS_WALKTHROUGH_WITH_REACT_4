import Gallerydetails from "../Gallerydetails/Gallerydetails";
import { useState } from "react";
import Search from "../Search/Search";
import Gallery from "../Gallery/Gallery";

function Displaygallery() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <Search updateSearchTerm={setSearchTerm} />
      {/**conditional rendering */}
      {!searchTerm ? (
        <Gallery />
      ) : (
        <Gallerydetails key={searchTerm} userName={searchTerm} />
      )}
    </div>
  );
}

export default Displaygallery;
