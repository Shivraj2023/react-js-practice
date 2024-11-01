  import React, { useState} from "react";
  import withcount from "./without";

    function Hovercounter ( {count,increment,name}) {
                return (
              <div>
                <h2>child component</h2>
                <button onMouseOver={increment}>{name} hovered {count} times</button>
                <p>Current Count in B: {count}</p>
              </div>
        )
    }

     export default   withcount(Hovercounter,10);