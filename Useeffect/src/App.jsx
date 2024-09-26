// import React from 'react'
// import ChildA from './components/ChildA'

// function App() {
  
//   return (
//     <div>
//       <ChildA data={"Hello World"}/>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import FirstChild from './components/FirstChild'
// import Usercontext from './components/Usercontext'

// function App() {
//   return (
//     <div>
//       <Usercontext>
//       <FirstChild/>
//       </Usercontext>
      
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import Usersscontext from './components/Usercontext'
// import FirstChild from './components/FirstChild'
// import Secondchild from './components/Secondchild'

// function App() {
//   return (
//     <div>App
//     <Usersscontext>
//       <FirstChild/>
//       <Secondchild/>
//     </Usersscontext>
//     </div>
//   )
// }

// export default App



import React from 'react'
import Themecolor from './components/Themecolor'
import Button from './components/Button'

function App() {


  return (
    <div style={{marginLeft:'50px'}}>
      <Themecolor>
        <Button/>
      </Themecolor>
      
    </div>

  )
}

export default App