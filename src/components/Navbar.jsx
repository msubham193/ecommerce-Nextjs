
import { AiOutlinePoweroff, AiOutlineHome } from "react-icons/ai";

import { BsHandbag } from "react-icons/bs";
import { useRouter } from "next/router";
import { useAuth } from "../../context/authContext";
import { useSelector} from "react-redux";

const Navbar = () => {
  const router = useRouter();

  const quantity = useSelector((state) => state.quantity);


  const { logout } = useAuth();
  return (
    <>
      {" "}
      <div className="w-full h-[80px]  flex items-center md:px-12 px-4 justify-between shadow-md">
        <div className="flex items-center gap-x-10 ">
          <h1 className="md:text-2xl text-lg font-bold text-black tracking-wide  ">
            Shoppy
          </h1>
        </div>

        <div className="flex  md:gap-x-7 gap-x-4 md:text-xl text-md  ">
          {" "}
          <div className="icon" onClick={() => router.push("/")}>
            <AiOutlineHome />
          </div>
          <div
            className="icon"
            onClick={() => {
              logout();
   

              router.push("/login");
            }}
          >
            {" "}
            <AiOutlinePoweroff />
          </div>
          <div className="icon" onClick={() => router.push("/cart")}>
            <BsHandbag />
            <span className="text-base">{quantity}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
