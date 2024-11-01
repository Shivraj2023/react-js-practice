
 import React, {PureComponent} from "react";
  class Purecomp extends PureComponent  {
    render ()  {
        console.log ( "pure component render" )
 return (
    <div>
        pure component  {this.props.count}
    </div>
 )

    }
  }
    export default Purecomp;