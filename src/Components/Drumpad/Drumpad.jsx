import { useState } from "react";
import Pad from "../Pads/Pad";


function Drumpad({kitPad}){
  

  const [active, setActive] =useState("");

  const switchPad = () =>{
      setActive(!active);
  }

  const containerStyle={
      border: '2px solid orange',
      backgroundColor: "#F2F2F2",
      boxShadow: "1px 1px 15px 1px orange"
  }
    return(
    <div className="container text-center" style={containerStyle}>
      <div className="row align-items-center">
       <div className="col-md-7">
        {
          active ?
          kitPad[1].map(clip =>(
            //console.log(clip)
            <Pad key={clip.id} clip={clip}></Pad>))
            :
            kitPad[0].map(clip =>(
              //console.log(clip)
              <Pad key={clip.id} clip={clip}></Pad>))
        }
        </div>
        <div className="col-md-5">
          <div className="row justify-content-center">
            <div className="col-md-4 btn p-4 m-5 btn-danger"style={{boxShadow:"5px 5px 15px 1px gray"}} >
              Power
            </div>
            <div className={`col-md-4 btn btn-success p-4 m-5 ${active && 'btn-primary'}`} style={{boxShadow:"5px 5px 15px 1px gray"}}id="botones" onClick={switchPad}>
                Bank
              </div>
          </div>

              

        </div>
        </div>
      </div>
    );
}

export default Drumpad;