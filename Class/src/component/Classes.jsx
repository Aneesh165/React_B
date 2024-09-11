// import React, { Component } from 'react'

// export default class Classes extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       count: 0 // initial State
//     }

//   }

//   increase=()=> {
//     this.setState((prevState) => {
//       return { count: prevState.count + 1 };
//     });
//   }
//   decrease=()=> {
//     this.setState((prevState) => {
//       return { count: prevState.count - 1 };
//     });
//   }

//   render() {
//     return (
//       <div className=' mx-auto pt-28 flex flex-col h-[500px] w-[500px] border'>
//         <h1 className='text-4xl font-semibold mx-auto pb-4'>Increment&Decrement </h1>
//         <h2 className='text-2xl py-3 font-semibold mx-auto'>Count: {this.state.count}</h2>
//         <div className='w-[400px] mx-auto flex justify-between'>
//           <button className='border-2 rounded-lg px-6 py-2 bg-sky-700 text-white' onClick={this.increase}>Increment</button>
//           <button className='border-2 rounded-lg px-6 py-2 hover:bg-red-500 hover:text-white' onClick={this.decrease}>Decrement</button>
//         </div>
//       </div>
//     )
//   }
// }