import React, { useState } from "react";
import axios from'axios'

const CreateUser = () => {

  const[name,setName]=useState()
  const[email,setEmail]=useState()
  const[age,setAge]=useState()

  const Submit=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:8000/createUser",{name,email,age})
    .then(result=>console.log(result)
    )
    .catch(err=>console.log(err)
    )
  }
 
  

  return (
    <div>
      <div>
        <form onSubmit={Submit}>
            <h2>Add User</h2>
          <div>
            <label>Name:</label>
            <input type="text" onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div>
            <label>Email:</label>
            <input type="email" onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div>
            <label>Age:</label>
            <input type="number" onChange={(e)=>setAge(e.target.value)}/>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
