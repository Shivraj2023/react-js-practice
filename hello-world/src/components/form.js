
 
 import React, { useState } from 'react';

 function Form () {
    const [ text, setText] =useState('');
    const [ textArea, setTextArea] =useState('');
    const [ optionvalue, setOption] =useState('react');


    const handleSubmit = (event)=>{
        alert(`${text},${textArea},${optionvalue}`)
        /* event.preventDefault(); */
    }

    return (
        <form onSubmit={handleSubmit}>
        <div>
        <label> Username:-</label>
            <input type='text' value={text} onChange={(e)=> setText(e.target.value)} placeholder='type here'></input> 



        </div> 
        <div>
        <label> Comments:-</label>
        <textarea value={textArea}  onChange={(e)=> setTextArea(e.target.value)}></textarea>


        </div>
        <div>
<label> Topic:-  </label>
        <select value={optionvalue} onChange={(e)=>setOption(e.target.value)}>
        <option value='react'>React</option>
        <option value='angualr'>Anugular</option>
        <option value='node '> Node</option>
        </select>


        </div>
        <button type="submit"> Submit</button>
        </form>  
         )

 }
 


 export default Form;        