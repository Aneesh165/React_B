import React from "react";
import { useState } from "react";

const Users = () => {
  const [user, setUser] = useState([
    {
      Name: "Aneesh",
      Email: "aneesh@gmail.com",
      Age: "23",
    },{
        Name: "Rahman",
      Email: "rahman@gmail.com",
      Age: "21",
    },{
        Name: "AR",
      Email: "ar165@gmail.com",
      Age: "21",
    }
  ]);

  return (
    <div>
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
          {user.map((user) => (
            <tr>
              <td>{user.Name}</td>
              <td>{user.Email}</td>
              <td>{user.Age}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
