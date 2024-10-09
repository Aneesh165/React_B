import React from "react";

const CreateUser = () => {
  return (
    <div>
      <div>
        <form>
            <h2>Add User</h2>
          <div>
            <label>Name:</label>
            <input type="text" />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" />
          </div>
          <div>
            <label>Age:</label>
            <input type="number" />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
