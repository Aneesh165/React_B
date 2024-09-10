  import React from "react";
  import bg_1 from "../assets/bg_1.jpg";
  import { Link } from "react-router-dom";

  function Home() {
    return (
      <div className="w-[90%] h-[90vh] mt-9 mx-auto bg-center bg-cover" style={{ backgroundImage: `url(${bg_1})` }}>
        <div className="flex justify-around pt-6 text-white">
          <div>
            <h1 className="text-3xl font-bold">INITIAL</h1>
          </div>
          <div className="flex gap-6 text-lg font-semibold">
            <div>
              <Link to={"./"}>
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
      </div>
    );
  }

  export default Home;
