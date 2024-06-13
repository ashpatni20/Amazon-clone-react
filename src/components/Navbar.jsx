import { AMAZON_LOGO } from "../utils/common";
import india from "../assets/india.svg";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { IoIosCart } from "react-icons/io";
import { useContext } from "react";
import { ProductContext } from "../main";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const {cart, signWithGoogle, currUser} = useContext(ProductContext)
  const navigate = useNavigate()

  const goToCart = () => {
    navigate("/cart")
  }

  const handleSignIn = async () => {
    try {
      await signWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  const handleHomePage = () => {
    navigate("/")
  }
  return (
    <div className="flex bg-[#131921] p-5 justify-between text-white">
      <div className="" onClick={handleHomePage}>
        <img className="w-[110px] cursor-pointer" src={AMAZON_LOGO} alt="" />
      </div>
      <div className="  flex justify-center items-center">
        <CiLocationOn />
        <span>Delivering to India</span>
      </div>
      <div className="flex justify-center items-center max-h-12  gap-2 bg-white px-4">
        <input type="text" name="" id="" className="text-black min-h-10 min-w-[650px] outline-none mr-3"/>
        <button className="">
          <CiSearch size={28} color="black" className=""/>
        </button>
      </div>
      <div>
        <img className="w-[20px]" src={india} alt="" />
        <span>IN</span>
      </div>
      <div className="flex flex-col text-sm cursor-pointer" onClick={() => {
              handleSignIn();
            }}>
        <p>Hello, sign in</p>
        <p>Account & Lists</p>
      </div>
      <div className="flex">
        <p>Returns & Orders</p>
      </div>
      <div onClick={goToCart} className="relative flex justify-center items-center cursor-pointer">
        <IoIosCart  size={35} />
        <p className="absolute top-[-20px] left-3 text-xl">{cart.length}</p>
        <p className="text-xl">Cart</p>
      </div>
    </div>
  );
};

export default Navbar;
