import React from "react";

function ChildComponents (props) {
    return (
        <div>
        <button onClick={ ()=> props.greethandler ('shivaraj')}> Greet Parent</button>
        </div>
    )
}
export default ChildComponents;