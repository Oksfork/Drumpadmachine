import { useState } from "react";
import Pad from "../Pads/Pad";
import "./Drumpad.scss";


function Drumpad({kitPad}){
  
  const [currentKit, setCurrentKit] = useState(kitPad[0]);
  const [currentId, setCurrentId] = useState('Heather Kit');


  const [active, setActive] =useState("");
  const [powerActive, setPowerActive] =useState(true);

  const switchPad = () =>{
    if(currentId==='Heather Kit'){
      setCurrentKit(kitPad[1]);
      setCurrentId('Piano');
    }
    else{
      setCurrentKit(kitPad[0]);
      setCurrentId('Heather Kit')
    }
    setActive(!active);
  }

  const powerTurn = () =>{
    setPowerActive(!powerActive);
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
          currentKit.map(clip=>(
            <Pad clip={clip} power={powerActive}></Pad>
          ))
          }
        </div>
        <div className="col-md-5">
          <div className="row justify-content-center">
            <div className={`col-md-4 btn p-4 m-5  ${powerActive ? 'btn-danger' : 'btn-dark'}`} style={{boxShadow:"5px 5px 15px 1px gray"}} onClick={powerTurn}>
              Power
            </div>
            <div className={`col-md-4 btn p-4 m-5 ${active ? 'btn-primary' : 'btn-success'}`} style={{boxShadow:"5px 5px 15px 1px gray"}} onClick={switchPad}>
              {currentId}
            </div>
          </div>
        </div>
        </div>
      </div>
    );
}

export default Drumpad;