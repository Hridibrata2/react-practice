 import React from 'react'
 
//  const UserGreeting = () => {
//     const isLoggedIn = true;
//    return (
//         <div>Welcome {isLoggedIn ? 'Hridi' : 'Guest'}</div>
//    ) 
//  }
 
//  export default UserGreeting



const UserGreeting = () => {
 
     const ifLoggedIn = false;
     return (
     <div>
          <h1>Welcome {ifLoggedIn && 'Hridi'}</h1>
     </div>
     );
}

export default UserGreeting