import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import CartProduct from "../components/CartProduct";
const Cart = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const cart = useSelector((state) => state);

  

  return (
    <div className="md:flex h-full p-2">
      {cart.products.length === 0 ? (
        <div className="flex items-center justify-center  font-bold text-2xl text-red-600 h-full mt-20 w-full">
          No Products In cart !
        </div>
      ) : (
        <>
          <div className="md:w-2/3 w-full   md:h-full  p-3 ">
            <div className="h-full bg-white md:ml-40">
              {cart.products.map((cartItem) => (
                <CartProduct key={cartItem.id} item={cartItem} />
              ))}

              {/* <CartProduct/> */}
            </div>
          </div>
          <div className="md:w-1/3 w-full   h-screen p-3   flex flex-col gap-y-8">
            <div className="border-2 border-gray-300 p-2 ">
              <p className="text-sm font-bold">
                PRICE DETAILS <span>({cart.products.length} Items)</span>
              </p>
              <div className="flex justify-between text-sm">
                <p>Total MRP</p>
                <p>{cart.total + " $"}</p>
              </div>
              <div className="flex justify-between text-sm">
                <p>Offer Discount</p>
                <p className="text-green-600">-50 $</p>
              </div>
              <div className="flex justify-between text-sm">
                <p>Delivery Charges</p>
                <p>50 $</p>
              </div>
            </div>

            <div>
              {" "}
              <div className="flex justify-between text-sm font-bold mb-4">
                <p>Total Amount</p>
                <p className="">{cart.total + " $"}</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-y-4">
                <button className="bg-[#127475] text-white w-full p-2 rounded-md"  onClick={() => router.push("/cheackout")} >
                  CHECKOUT
                </button>
                <p>OR</p>{" "}
                <div
                  className="text-[#127475] font-medium cursor-pointer"
                  onClick={() => router.push("/")}
                >
                 <p>Continue Shopping</p> 
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
