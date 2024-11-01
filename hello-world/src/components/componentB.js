 
 import React, { useContext } from "react";
 import ComponentC from "./componentc";
 import UserContext from "./context";

  function ComponentB  () {
    const  { data1  }= useContext(UserContext);
    
    return (
        <div>
           <ComponentC></ComponentC>
           <h2>This is Copmopnent 2</h2>
           <p> This data is taken from : {data1}</p>
           
        </div>
    )
  }
   export default ComponentB;