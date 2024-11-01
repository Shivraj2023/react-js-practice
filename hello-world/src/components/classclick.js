 import React, {Component} from 'react';
 class  Classclick  extends Component {
       clickHandler() {
        console.log ('button  clicked')
       }
     
    render () {
     return  (
             <div>
               <button onClick={ this.clickHandler}> subscribe me</button>
         </div>
     )
    }
}

export default Classclick;