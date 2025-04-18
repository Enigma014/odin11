import React,{useState} from "react";
import KeepScore from "./score";
import GifSearch from "./gif";
function Toggle(){
    const[score,setScore]=useState(0);
    const[clickedGifs,setClickedGifs]=useState([]);

    const handleGifClick=(gifId)=>{
        if (!clickedGifs.includes(gifId)) {
            setClickedGifs([...clickedGifs,gifId]);
            setScore((prev)=>prev+1);
        }
        else{
            setScore(0);
        }
    }
    return(
        <div>
            <KeepScore score={score}/>
            <GifSearch onGifClick={handleGifClick}/>
        </div>
    )

}
export default Toggle;