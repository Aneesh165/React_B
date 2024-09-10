import React from 'react'
import { Link } from 'react-router-dom';

function Services() {
  return (
<div >
      <div className="flex justify-around pt-6 ">
          <div>
            <h1 className="text-3xl font-bold">INITIAL</h1>
          </div>
          <div className="flex gap-6 text-lg font-semibold">
            <div>
              <Link to={"/"}>
                <h2>Home</h2>
              </Link>
            </div>
            <div>
              <Link to={"/About"}>
                <h2>About</h2>
              </Link>
            </div>
            <div>
              <Link to={"/Services"}>
                <h2>Services</h2>
              </Link>
            </div>

            <div>
              <Link to={"/Contact"}>
                <h2>Contact</h2>
              </Link>
            </div>
          </div>
        </div>
        <div className='grid pt-28 text-center'>Services</div>
    </div>
      )
}

export default Services