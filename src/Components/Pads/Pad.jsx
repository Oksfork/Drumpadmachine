import { useEffect } from "react";
import { useState } from "react";
import "./Pad.scss";

function Pad({clip, power}){

    console.log(power);
    const [active, setActive] = useState(false);

    useEffect(()=>{
        if(power == true){
            document.addEventListener("keydown", handleKeyPress);
        }
        return()=>{
            if(power == true){
                document.removeEventListener("keydown", handleKeyPress);
            }
        }
    },[]);

    const handleKeyPress = (e) =>{
        if(power == true){
            if (e.keyCode === clip.keyCode){
                playSound();
                console.log(e.keyCode);
                console.log(clip.keyTrigger);
                console.log(clip.keyCode);
            }
        }
    }

    const playSound = () =>{
        if(power == true){
            const sound = document.getElementById(clip.keyTrigger);
            sound.currentTime=0;
            setActive(true);
            setTimeout(()=>setActive(false),200);
            sound.play();
        }

        return;
    }

    return(
        <>
        {
            power ?
            <div className={`safe-button ${active && 'press-button'}`} onClick={playSound}>
                            <audio src={clip.url} id={clip.keyTrigger}></audio>
            <p>
                {clip.keyTrigger}
            </p>
            </div>
            :
            <div className={`safe-button ${active && 'press-button'}`}>
                           <p>
                {clip.keyTrigger}
            </p>
            </div>
        }

        </>
    );
}

export default Pad;