import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Pad from "../Pads/Pad";
import "./Drumpad.scss";


function Drumpad({kitPad}){
  

  const [active, setActive] =useState("");
  const [isOn, setIsOn] = useState(true);

  const switchPad = () =>{
      setActive(!active);
  }

  const containerStyle={
      backgroundColor: "#F2F2F2",
      boxShadow: "1px 1px 15px 1px orange",
      borderRadius: "15px"
  }
    return(
    <div className="container text-center containerStyle">
      <div className="row align-items-center" >
        <div className="col-md-7 text-center">
          <div className="row m-5 align-items-center">
          {
          active ?
          kitPad[1].map(clip =>(
            //console.log(clip)
            <div className="col-4 col-sm-2 col-md-4 text-center">
              <Pad  clip={clip} power={isOn}></Pad>
            </div>))
            :
            kitPad[0].map(clip =>(
              //console.log(clip)
            <div className="col-4 col-sm-2 col-md-4 text-center">
              <Pad clip={clip} power={isOn}></Pad>
            </div>
            ))
        }
          </div>
        </div>
        <div className="col-md-5">
          <div className="bottoner-displaying">
            <div className={` ${isOn == true  ? 'btn-power' : 'btn-poweroff'}`} onClick={() => setIsOn(!isOn)} >
            <FontAwesomeIcon icon={faPowerOff} />
            </div>
            <div className="bank-container">
              {
                active ? 
                  <div class="bank-display">
                    Bank 2
                  </div>
                :
                <div className="bank-display2">
                    Bank 1
                </div>
              }
            </div>
            <div className={`${active ? 'switch-display-2' : 'switch-display-1'}`} id="botones" onClick={switchPad}>
              Switch Bank
            </div>
          </div>
        </div>
        </div>
      </div>
    );
}

export default Drumpad;