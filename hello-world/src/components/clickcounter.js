 import React from "react";
 import withcount from "./without";
  
 function Clickhandler ( {count,increment,name}) {

     return  (
       <div>
        <h2>Child Component</h2>
     <button onClick={increment}> {name} clicked  {count} Times</button>
     <p>Current Count in A: {count}</p>
     </div>
     )
}
 export default  withcount (Clickhandler ,5);

