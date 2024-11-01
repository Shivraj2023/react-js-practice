 
 import React from "react";

   function Greeting (props) {
     return (
      <div> 
         {props.isloggedin ? <h1> Welcome back!</h1> : <h1> please sign up!</h1>}
      </div>
      
     );
   }
   
   export default Greeting;