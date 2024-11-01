  
  import React from "react";

    const HOC = ( Wrappedcmpo) => {
        const sampleObject = {
            name : "shivaraj",
            age :23,
            role : "full stack developer",
            company : " google"
        } 
   
    return (props) => {
       
     
        return <Wrappedcmpo  value = { sampleObject}   {...props}
      ></Wrappedcmpo>
    }
    

   }

export default HOC;
   
