import React, { useEffect, useState} from "react";
import GifSearch from "./GifSearch";
import GifList from "./GifList";



function GifListContainer() {
   const [git, setGif] =useState([]);
  
   const handleSearch = (e) => {
      e.preventDefault()
      
   }
      useEffect(() => {
         fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=qxHF45HQkKnc6IHPjcCwZSS5wUW3kaAD&rating=g`)
         .then((resp) => resp.json())
         .then((data) => console.log(data))
      }, handleSearch)
   

   return (
      <div>
         <GifSearch handleSearch={handleSearch}/>
         <GifList />
      </div>
   );
}


export default GifListContainer;