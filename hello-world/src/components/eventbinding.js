import React, {Component} from 'react'
import Message from './message';
class  EventBind extends Component {
      constructor (props) {
        super(props)  
        this.state = {
            Message : "Hello"
        };     
      }  
      clickHandler () {
        this.setState ({
            Message: "goood bye!"
        }) 
       
      }
  render () {
   return  (
       <div>
        <div> {this.state.Message}</div>
            
         <button onClick ={this.clickHandler.bind (this)}>click</button>
       </div>
   )
  }
}






export default EventBind;