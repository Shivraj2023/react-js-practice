 
 import React from 'react'

 function UserList (Props) {

    return (
         <ul>
          {Props.users.map ( (user,index)=> (
            <li key={index}> {user}</li>
           ))}
         </ul>
    )
 }
 export default UserList;