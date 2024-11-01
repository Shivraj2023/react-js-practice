  
  import React from "react";  
    function Person ( {person: {id ,name,age}}) {
        
        return (
            <div> 
   <h2> 
         iam {name}, iam {age } years old and i made a change here.
       </h2>

            </div>
        ) 
    }
    export default Person;