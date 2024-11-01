  
 
import React ,{useState} from "react";

 const withcount = (WrappedComponent,step) =>{
    return (props) => { 
         const [count ,setCount] = useState(0);

    const increment = () => {
      setCount((prevCount) => prevCount + step);
    };
    const dcrement = () => {
      setCount((prevCount) => prevCount -step);
    };
         return <WrappedComponent count={count} increment={increment}  dcrement ={dcrement} {...props}/>;
    }
 } 
   export default withcount;
   