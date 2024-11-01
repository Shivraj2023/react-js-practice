
  import React from "react";
  import './mystyles.css';

    function Stylesheet ( props) {
    let className= props.className ? 'primary': ""

        return (
            <div>
                <h1 className={className}> hi hello everybody</h1>
            </div>
        )


    }  export default Stylesheet;