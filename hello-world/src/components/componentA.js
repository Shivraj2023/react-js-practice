
import React, { useContext } from "react";
 import ComponentB from "./componentB";
import UserContext from "./context";

  function ComponentA ( ) {
    const {dataA} = useContext(UserContext);
    return (
        <div>
            <ComponentB/>

           <h2> This is Component 3</h2>
           <p> this dat taken from :{dataA}</p>

        </div>
    )
  }
   export default ComponentA;