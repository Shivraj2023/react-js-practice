

  import React, { useContext } from "react";
import UseContext from "./useContext";
import {UserContext} from "../App";

    function Usethere () {
      const [name,] = useContext(UserContext)


        return ( 
            <>
             <UseContext></UseContext>
             <h2> my name is { name} </h2>
             <h3> thnks for wishing</h3>
            </>
        )
    }
    export default Usethere;