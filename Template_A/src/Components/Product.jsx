import React from "react";

function Product({ name, price, image ,desc}) {
  return (
    <div className="flex flex-col  justify-center items-center text-center shadow-lg">
      <div className="p-2 ">
        <img className="w-[500px] h-[300px] object-cover" src={image} />
      </div>
      <div>{name}</div>
      <div>{price}</div>
      <div><p>{desc}</p></div>
    </div>
  );
}

export default Product;
