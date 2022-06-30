import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";

import { addProduct } from "../../redux/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const quantity = 1;

  const { image, title, description, price } = product;

  const handleClick = () => {
    dispatch(addProduct({ ...product, price, quantity }));
  };

  return (
    <div className="w-72 p-3 h-96 shadow-xl rounded-xl ">
      <div className="h-[70%] relative rounded-2xl ">

        <Image
          src={image}
          alt="image nisi"
          className="h-full w-full object-fill "
        />
      </div>
      <div className="grid  mt-3 text-black p-0">
        <div className="flex justify-between ">
          {" "}
          <h1 className="text-[1rem] text-start font-bold text-gray-500  ">
            {title.split("", 20)}
          </h1>
          <div className="flex items-center gap-x-2">
            <p className="mb-0 text-[1rem]  text-black">
              <span>{price}</span> ${" "}
            </p>
          </div>
        </div>

        <h1 className="text-[0.9rem] text-start font-[400] ">
          {description.split("", 30)}
        </h1>

        <button
          className="bg-gray-200 p-1 hover:bg-slate-300 rounded-md mt-2 font-sans"
          onClick={handleClick}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
