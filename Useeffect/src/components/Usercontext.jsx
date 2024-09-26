// import React, { Children, createContext, useContext } from "react";

// export const users=createContext()

// function Usersscontext({ children }) {



//   return (
//     <div>
//       <users.Provider value={"Hello"}>
//         {children}
//         </users.Provider>
//     </div>
//   );
// }

// export default Usersscontext;


import { createContext } from 'react';

const Usercontext = createContext();

export default Usercontext;