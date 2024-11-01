import React, { useState } from "react";

  function Hoocuntthree () {
    const [ name ,setName] = useState( { firstname:"", lastname:""})
    return (
   <>
     <form>
        <input type="text"   value={name.firstname} onChange={ (e)=>setName({...name,firstname:e.target.value})}></input>
        <input type="text"   value={name.lastname}  onChange={ (e)=>setName({...name,lastname:e.target.value})}></input>
          <h2> Your firstname is - {name.firstname}</h2>
          <h2> Your second name is - {name.lastname}</h2>
          <h2>{JSON.stringify(name)}</h2> 
     </form>
   </>
    )
  }

  export default Hoocuntthree;