 
 import React from "react";
import Person from "./person";

   function List () {
    const persons = [
        { id :1,
            name:"shivaraj",
            age : 23
        },
        { id :3,
            name:"abd",
            age : 40
        },{ id :3,
            name:"sachin ",
            age : 46
        },{ id :4,
            name:"virat",
            age : 36
        }]
        const personlist= persons.map ( person => (
         <Person  person = {person} ></Person>
        ))
       return (
        <div>
            {personlist}
        </div>
       )

     
   }
     export default List;