  
    import React, { useContext } from "react";  
    import UserContext from "./context";

     function ComponentC () {
       const  {data} = useContext(UserContext)
        return (
           
              <>
              
               
                 <h2> Hello shivaraj</h2>
                 <p> recievd data form context : {data}</p>
                
                 </>
          
        )
     }
       export default ComponentC;