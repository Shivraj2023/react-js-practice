
  import React from "react";

   function Index() {
    const persons= [ "shivaraj"," virat ", "raina"];

      const namelist = persons.map ( (person,index)=>(
          <h2> {person}</h2>
      ))

        return (
             <div>
                {namelist}
             </div>
        )



   }
     export default Index;