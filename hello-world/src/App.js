import logo from './logo.svg';
import './App.css';
    import Parentcompo from './components/parentcomp';
   
   import Clickhandler from './components/clickcounter';
   import Hovercounter from './components/hovercounter';
   import Increment from './components/parenthoc';
   import ParentComponent from './components/hoc';
   
   import Form from './components/render';
   import ComponentA from './components/componentA';
/* import UserContext from './components/context'; */
import HOC from './components/hocamain';
import Display from './components/usehocmain';
  import Show from './components/parhoc';  
  import Hoocuntthree from './components/hooks';
  import Addfruit from './components/addfruit';
   import UseContext from './components/useContext';
import React from 'react';
import Usethere from './components/usecontextcenter';
  

   export const UserContext = React.createContext(); 
    /*  const User = {
    name : "shivaraj",
    age : 21,
    aim : "to get better"
  } */
 
   function App() { 
  
  return (
    <div className="App">
       < UserContext.Provider value={["shivaraj","everybofy"]} >
        <Usethere></Usethere>
       </UserContext.Provider>

       
     

     
     
     
     
     
     
     
         {/* <Addfruit></Addfruit> */}
      {/* <UserContext.Provider value ={ {data,data1,dataA}}>

        <ComponentA></ComponentA>
      </UserContext.Provider> */}
        
          



    </div>
  );
}

export default App;

