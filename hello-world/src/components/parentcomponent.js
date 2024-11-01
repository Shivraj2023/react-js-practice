  import React, {Component} from 'react';
import ChildComponents from './childcomponent';

  class Parentcomponent extends Component {
    constructor (props) {
        super(props)

        this.state = {
            parentName :"parent"
        }
        this.greetparent=this.greetparent.bind(this)
    }
      greetparent ( childName) {
        alert(`hello ${this.state.parentName} from ${ childName}`)
        
      }
     render () {
        return (
             <div>
              <ChildComponents greethandler={this.greetparent}> </ChildComponents>
             </div>
        )
     }
  }
  export default Parentcomponent;