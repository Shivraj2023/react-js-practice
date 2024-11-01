  
  import React,  {Component} from "react";

   class Regcomp extends Component {

     render () {
        console.log ( "regular component rener" )
        return (
            <div>
      Regular compoemnet {this.props.count}
            </div>
        )
     }
   }

   export default Regcomp;