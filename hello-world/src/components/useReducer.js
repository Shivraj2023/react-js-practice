  import React,{useReducer} from "react";


   const initialstate=0
   const reducer = ( state,action)=> {
   switch ( action) {
    case 'increment':
        return state + 1
    case 'decrement':
        return state - 1
    case 'reset':
       return initialstate
       default:
        return state
   }
   }

    function Usereducing () {
          const [ count,dispatch]=   useReducer ( reducer, initialstate)

        return(
            <>
            <div>Count - {count}</div>
            <button onClick={ ()=> dispatch('increment')}>Increment</button>
            <button onClick={()=> dispatch('decrement')}>Decremnet</button>
            <button onClick={()=> dispatch('reset')}>Reset</button>
            
            </>
        )
    }
    

  export default Usereducing;