  
 import React, { useState } from "react";

   function Addfruit () {

    const [fruit,setFruit] = useState ([ "mango","pineaplle","jackfruit"])
    const [ inputfruit, setInputfruit] = useState("");

     const handlechange = (e) => {
          setInputfruit( e.target.value)
     }

     const addedfruit = (e)=> {
        e.preventDefault(); 
            setFruit([...fruit,inputfruit])
            setInputfruit("");
        
       
     }




     return (
       <>  
       <form onSubmit={addedfruit}>
        <input
         type="text"
            value={inputfruit}   
         onChange={handlechange}
         placeholder="add fruit here">        
        </input>
        <button type="submit"> add fruit</button>
       </form>
         <div>
            <ul>
                {
                   fruit.map ( (fruit,index)=> {
                    return <li key={index}> {fruit}</li>
                   })
                }


            </ul>
         </div>
       </>
     )
   }

     export default Addfruit;
