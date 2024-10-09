import React from 'react'

const UpdateUser = () => {
  return (
    <div>
        <div>
      <div>
        <form>
            <h2>Update User</h2>
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
          <button>Update</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default UpdateUser