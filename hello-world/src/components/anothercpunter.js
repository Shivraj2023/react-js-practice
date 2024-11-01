 
  import React from "react";
  import withcount from "./without";
   
  function Clickhandlerdec ( {count,dcrement,name}) {
 
      return  (
        <div>
         <h2>Child Component</h2>
      <button onClick={dcrement}> {name}Clicked -{count} Times</button>
      <p>Current Count in c: {count}</p>
      </div>
      )
 }
  export default  withcount (Clickhandlerdec,20 );
 