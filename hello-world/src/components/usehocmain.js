  import React from "react";
  import HOC from "./hocamain";

  function Display ({value,data}) {
    const { name,age,role,company}= value;
     return  (
        <div>
    <h1> hello youtube {data}</h1>
    <h2> This is {name}</h2>
    <h2> I am  {age } Years old</h2>
    <h2> I work as a {role}</h2>
    <h2>  In a mnc comapany called {company}</h2>
    </div>


     ) 
  }


  export default HOC (Display);