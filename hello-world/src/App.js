import logo from './logo.svg';
import './App.css';
    import Parentcompo from './components/parentcomp';
   
   import Clickhandler from './components/clickcounter';
   import Hovercounter from './components/hovercounter';
   import Increment from './components/parenthoc';
   import ParentComponent from './components/hoc';
   
   import Form from './components/render';
   import ComponentA from './components/componentA';
import UserContext from './components/context';
import HOC from './components/hocamain';
import Display from './components/usehocmain';
  import Show from './components/parhoc';  
  import Hoocuntthree from './components/hooks';
  import Addfruit from './components/addfruit';
 
function App() {
  /* const data = "hello from api";
  const data1 = "this only for second compoent"
  const dataA = "this only for third compoent" */
  
  return (
    <div className="App">

        <Addfruit></Addfruit>
     

     
     
     
     
     
     
     
     
      {/* <UserContext.Provider value ={ {data,data1,dataA}}>

        <ComponentA></ComponentA>
      </UserContext.Provider> */}
        
          



    </div>
  );
}

export default App;
