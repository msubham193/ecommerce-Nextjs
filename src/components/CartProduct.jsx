import React from "react";

import { MdClose } from "react-icons/md";
import { FiPlus, FiMinus } from "react-icons/fi";
import Image from "next/image";

const CartProduct = ({ item }) => {
  const { image, title, price, description, } = item;

  return (
    <div className="border-1 border-gray-300 relative flex mb-2 shadow-lg">
      <div className="h-52 p-2  ">
        <Image src={image} alt="" className="h-full" />

        <MdClose className="text-2xl absolute top-1 right-2" />
      </div>
      <div className="p-2 ">
        <h3 className="text-base font-semibold mb-0">{title.split("", 20)}</h3>
        <p className="text-sm tracking-wide mb-0">   {description.split("", 30)}</p>
        <p className="text-sm  font-normal text-gray-500">Sold by:gladiator</p>

        <div className="flex gap-x-8">
          <select name="size" id="size" className="p-1 text-sm ">
            <option value="32">32</option>
            <option value="28">28</option>
            <option value="34">34</option>
            <option value="24">24</option>
          </select>
          <div className="flex items-center justify-center gap-x-3">
            <button className="bg-gray-300 p-1  rounded-md">
              {" "}
              <FiPlus className="font-extraboldbold" />
            </button>
            <div className="p-0 px-2">1</div>
            <button className="bg-gray-300 p-1 rounded-md">
              {" "}
              <FiMinus />
            </button>
          </div>
        </div>
        <div className="flex gap-x-4 mt-4">
          {" "}
          <p className="mb-0 text-sm font-bold">
            <span>{price}</span> ${" "}
          </p>
          <p className="text-red-600 text-sm font-light">40% OFF</p>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
