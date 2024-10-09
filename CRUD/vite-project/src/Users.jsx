import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [user, setUser] = useState([
    {
      Name: "Aneesh",
      Email: "aneesh@gmail.com",
      Age: "23",
    },
    {
      Name: "Rahman",
      Email: "rahman@gmail.com",
      Age: "21",
    },
    {
      Name: "AR",
      Email: "ar165@gmail.com",
      Age: "21",
    },
  ]);



  return (
    <div>
      <div>
        <Link to="/create">Add +</Link>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user, index) => (
              <tr key={index}>
                <td>{user.Name}</td>
                <td>{user.Email}</td>
                <td>{user.Age}</td>
                <td>
                  <button>
                    <Link to="/update">Edit</Link>
                  </button>
                  <button >Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
