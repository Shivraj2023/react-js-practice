
import React, {Component} from 'react'
class  Message extends Component {
       constructor () {
        super () 
            this.state = {
               Message :"Welcome Visitor"
            }
        }
         
         ChangeMessage () {
            this.setState ( {
                Message : " Thanks for subscribing"
            })
        }
       
    
    
    
    render () {
        return  (
                <div>
                   <h1>
                 {this.state.Message}
                </h1>
            <button onClick={ ()=>this.ChangeMessage()}> subscribe me</button>
            </div>
        )
       }
}
  
export default Message

