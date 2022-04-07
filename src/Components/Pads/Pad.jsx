import { useEffect } from "react";
import { useState } from "react";

function Pad({clip}){

    const [active, setActive] = useState(false);

    useEffect(()=>{
        document.addEventListener("keydown",handleKeyPress);
        return()=>{
            document.removeEventListener("keydown",handleKeyPress);
        }
    },[]);

    const handleKeyPress = (e) =>{
        if (e.keyCode === clip.keyCode){
            playSound();
            console.log(e.keyCode);
            console.log(clip.keyTrigger);
            console.log(clip.keyCode);
        }
    }

    const playSound = () =>{
        const sound = document.getElementById(clip.keyTrigger);
        sound.currentTime=0;
        setActive(true);
        setTimeout(()=>setActive(false),200);
        sound.play();
    }

    return(
        <div className={` btn btn-secondary p-4 m-5 ${active && 'btn-warning'}`} style={{border:"2px solid orange"}} onClick={playSound}>
            <audio src={clip.url} id={clip.keyTrigger}></audio>
            {clip.keyTrigger}
        </div>
    );
}

export default Pad;