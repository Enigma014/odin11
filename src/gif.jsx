import React from "react";
import { useState ,useEffect} from "react";

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

function GifSearch({onGifClick}){
    const[gifs,setGifs] = useState([]);
    
        async function getGif(){
            const res = await fetch('https://api.giphy.com/v1/gifs/search?api_key=CW5UIO1UsUlWbVW1k3AVBnF9bblQPWaY&q=funny+tree')
            const data = await res.json();
            setGifs(data.data);
        }
        useEffect(()=>{
       getGif();
    },[]);
    
const handleClick=(gifId)=>{
    onGifClick(gifId);
    const shuffled = shuffleArray(gifs);
    setGifs(shuffled);
}
    
    
    return(
        <div>
            <h1>Meere giphys</h1>
             
            {gifs.map((gif)=>(

                <img
                key={gif.id}
                src={gif.images.fixed_height.url}
                alt={gif.title}

                onClick={()=>handleClick(gif.id)}
                
                style={{margin:"10px",cursor:"pointer"}}
            />

                
        
        ))}
        </div>
        
            

        );
    }
    export default GifSearch; 

