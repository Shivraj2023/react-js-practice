
  import React, { useEffect,useState} from 'react';

    function Increment () {

        const [ count , setCount]= useState(0);

         useEffect ( ()=> {
             const interval = setInterval ( ()=>{
                setCount(count+1);
             },1000);
             return () => clearInterval(interval); 
         },[])



         return (
            <div>
                <button> count:{count}</button>
            </div>
         )
    }

     export default Increment; 