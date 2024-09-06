import React from "react";
import "./App.css";
import Product from "./Components/Product";
import Navbarss from "./Components/Navbar";

function App() {
  const Data = [
    {
      name: "Shoe 1",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSZvkZxHa1P3b6MUQUi6y04swub6O01-FFH-4rW0zvS94bTXm-kK6W27DWsetoO-uDZm0k3MvF1GvqkDZg6Z8mP9hn8WN9VytFd-tPjlSKSQqrSA6-fNzDvLg",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      price: 50,
    },
    {
      name: "Shoe 2",
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTu2pMlKRLp-RgcfkONvhnUzmWwRmGI_ebhKhdePkvki-sG6rirVraYGAiEgw5ZNLnz1FVl1Llt7LCTAIjxxI4fK1G3uHMsrkJbbdBl0d29HcMn88cHTsq5OQ",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      price: 40,
    },
    {
      name: "Shoe 3",
      image:
        "https://rukminim2.flixcart.com/image/600/600/xif0q/shoe/3/z/t/-original-imagx9kwqhyqsgqz.jpeg",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      price: 30,
    },
  ];
  return (
    <>
      <Navbarss />
      <div className="main">
        <h1 style={{ textAlign: "center" }}>PRODUCTS</h1>

        <div className="flex sm:flex-row flex-col justify-center items-center w-[80%] mx-auto my-6 border p-4 gap-4 shadow-md">
          {Data.map((item, index) => {
            return (
              <Product
                name={item.name}
                image={item.image}
                price={item.price}
                desc={item.desc}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
