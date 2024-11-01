  
    import React,{useState} from "react";
import Clickhandler from "./clickcounter";
import Hovercounter from "./hovercounter";
import Clickhandlerdec from "./anothercpunter";

    function  Increment() {
    
        

          return (
             <div>
            <h1> independent count ecample with hoc</h1>
             <Clickhandler name= "shivaraj"></Clickhandler>
            <Hovercounter name= "shivaraj"></Hovercounter>
            <Clickhandlerdec name= "shivaraj"></Clickhandlerdec>
             </div>

          )


    }

    export default Increment;