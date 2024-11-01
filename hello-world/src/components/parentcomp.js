  
  import React,  { Component} from "react";

import MemoComp from "./remo";

  class Parentcompo extends  Component {
    constructor (props) {
        super (props) 
        this.state = {
            count : 0
        }
    }

    componentDidMount() {
      this.intervalId = setInterval(() => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
      }, 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.intervalId); // Clear the interval to avoid memory leaks
    
     }

    render () {
        console.log ( "***********parent component rendering**************")
       return (
           <div>
           parent component
           {/* <Regcomp  name= {this.state.count}></Regcomp>
           <Purecomp  name= {this.state.count}></Purecomp> */}
           < MemoComp name= {this.state.count}></MemoComp>
           <p>Count: {this.state.count}</p>
           </div>
       )
    }
  }

  export default Parentcompo;