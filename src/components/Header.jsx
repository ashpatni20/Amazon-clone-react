import { useState } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { useMediaQuery } from "@mui/material";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { AMAZON_LOGO } from "../utils/common";
import { useContext } from "react";
import { ProductContext } from "../main";
import useFetch from "../utils/useProduct";

// npm install @mui/icons-material
 
const Header = () => {
  const { cart, signWithGoogle, currUser, logOut, input, setInput, setSearchVal } = useContext(ProductContext);
  const navigate = useNavigate()

  // useFetch

  const handleInput = (e) => {
    e.preventDefault()
    setSearchVal(input)
    navigate("/products")
  }

  if(currUser) console.log(currUser)
    const greetingMessage = currUser ? `Hello ${currUser?.displayName}` : "Hello, sign in";


  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (e) {
      console.log(e);
    }
  };



  const handleSignIn = async () => {
    console.log("inside fn")
    try {
      await signWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  const menuItems = [
    "Amazon MinTV",
    "Sell",
    "Best Sellers",
    "Mobiles",
    "Todays Deal",
    "Fashion",
    "Electronics",
    "Prime",
    "Home kitchen",
    "Customer Service",
    "Amazon Pay",
    "Computers",
    "Books",
    "Car & Motorbikes",
    "Gift",
    "Sports fitness And OutDoors",
  ];

  const trending = ["Best Sellers", "New Release", "Movers and Shakers"];
  const digitalContent = [
    "Amazon MiniTv_free Entertainment",
    "Echo & Alexa",
    "Fire Tv",
  ];
  const shopCategories = ["Mobiles", "Laptops", "Home Appliances"];
  const programsAndFeatures = ["Amazon Pay", "Amazon Prime", "Amazon Fresh"];
  const helpAndSettings = ["Your Account", "Help"];

  const isDesktop = useMediaQuery("(min-width:600px)");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`header-wrapper ${isMenuOpen ? "overlay-open" : ""}`}>
      <nav className="bg-[#131921] flex flex-wrap items-center justify-around p-2 ">
        <div className="flex items-center justify-between mx-2">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none p-2 m-1 menu-button md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <CloseIcon />
            ) : (
              <>
                <span className="block h-0.5 w-5 bg-white mb-1"></span>
                <span className="block h-0.5 w-5 bg-white mb-1"></span>
                <span className="block h-0.5 w-5 bg-white"></span>
              </>
            )}
          </button>
          <Link to="/" className="flex items-center cursor-pointer mx-2">
            <img
              className="w-[80px] sm:w-[100px] md:w-[110px]"
              src={AMAZON_LOGO}
              alt="Amazon Logo"
            />
            <span className="text-white text-center hidden md:inline">.in</span>
          </Link>
          <div className="hidden md:flex flex-col justify-center items-center px-2 cursor-pointer">
            <span className="text-gray-300 font-bold text-[10px] sm:text-[12px] md:text-[14px] ml-3">
              Delivery To India
            </span>
            <div className="flex items-center">
              <LocationOnOutlinedIcon style={{ fill: "white" }} />
              <span className="text-gray-300 font-semibold text-[13px] sm:text-[15px] md:text-[17px]">
                Update Location
              </span>
            </div>
          </div>
        </div>

        <div className=" mx-2 py-3 px-1 flex justify-center lg:justify-start">
          <div className="flex items-center w-full">
            <div className="bg-[#D4D4D4] cursor-pointer hidden md:block">
              <select className="bg-[#D4D4D4] rounded-l-sm p-2 w-12 sm:w-14 md:w-16 outline-none">
                <option value="">All</option>
                <option value="Mobiles">Mobiles</option>
                <option value="Laptops">Laptops</option>
                <option value="Home Appliances">Home Appliances</option>
              </select>
            </div>
            <input
              className="p-2 w-[550px]  outline-none"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search Amazon.in"
            />
            <div className="flex p-2 bg-[#F3A847] cursor-pointer rounded-r-sm" onClick={handleInput}>
              <SearchIcon
                style={{ fill: "black", width: "24px", height: "24px" }}
              />
            </div>
          </div>
          <div className="hidden md:flex items-center mx-2">
          <div className="flex  cursor-pointer mx-2 ">
            <span onClick={handleSignIn} className="text-gray-200 font-semibold text-[10px] sm:text-[12px] md:text-[14px]">
            {greetingMessage} 
            </span>
            <span className="text-white font-semibold text-[13px] sm:text-[15px] md:text-[17px] ">
              Account and Lists
            </span>
          </div>
          <div className="flex flex-col cursor-pointer mx-2">
            <span className="text-gray-200 font-semibold text-[10px] sm:text-[12px] md:text-[14px]">
              Return
            </span>
            <span className="text-white font-semibold text-[13px] sm:text-[15px] md:text-[17px]">
              & Order
            </span>
          </div>
          <Link to="/cart" className="flex items-center cursor-pointer mx-2 relative">
            <ShoppingCartOutlinedIcon
              style={{ fill: "white", width: "30px", height: "35px" }}
            />
            <p className="absolute top-[-16px] left-3 font-black text-l text-white">{cart?.length}</p>
            <span className="text-white font-semibold text-[13px] sm:text-[15px] md:text-[17px]">
              Cart
            </span>
          </Link>
        </div>
        </div>

        

        <div className="md:hidden flex items-center">
          <div className="flex flex-col cursor-pointer mx-2">
            <span onClick={handleSignIn} className="text-gray-200 font-semibold text-[10px] cursor-pointer sm:text-[12px]">
            {greetingMessage}

            </span>
            <span className="text-white font-semibold text-[13px] sm:text-[15px]">
             {currUser && "Log out"}
            </span>
          </div>
          <Link to="/cart" className="flex items-center cursor-pointer mx-2">
            <ShoppingCartOutlinedIcon
              style={{ fill: "white", width: "30px", height: "35px" }}
            />
            <span className="text-white font-semibold text-[13px] sm:text-[15px]">
              Cart
            </span>
          </Link>
        </div>
      </nav>

      <section className="bg-[#232F3E]">
        {isDesktop && (
          <div className="flex items-center text-white p-2">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none p-2 m-1 menu-button"
            >
              {isMenuOpen ? (
                <CloseIcon />
              ) : (
                <>
                  <span className="block h-0.5 w-5 bg-white mb-1"></span>
                  <span className="block h-0.5 w-5 bg-white mb-1"></span>
                  <span className="block h-0.5 w-5 bg-white"></span>
                </>
              )}
            </button>
            <div className="hidden md:flex">
              {menuItems.map((text, index) => (
                <div key={index} className="px-4 py-2">
                  <span className="text-sm text-white">{text}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div
          className={`menu-slide-in overflow-y-scroll ${
            isMenuOpen ? "open" : ""
          }`}
        >
          <div className="bg-white">
            <div className="px-4 py-2 mx-3 mt-10 flex justify-between items-center" onClick={handleSignIn}>
              <span className="text-x text-black font-semibold">
                {greetingMessage}
              </span>
              <img
                className="w-[40px] rounded-full h-[40px] cursor-pointer"
                src={currUser?.photoURL || "https://raw.githubusercontent.com/Dhirajbhavsar9900/AmazonClone_React-MCT-/main/src/assets/images/amazon-logo-6201.png"}
                alt=""
              />
            </div>
          </div>
          <MenuSection title="Trending" items={trending} />
          <MenuSection
            title="Digital Content and Devices"
            items={digitalContent}
          />
          <MenuSection title="Shop by Category" items={shopCategories} />
          <MenuSection
            title="Programs and Features"
            items={programsAndFeatures}
          />
          <MenuSection title="Helps & Settings" items={helpAndSettings} />
          <div className="px-4 py-2" onClick={handleLogOut}>
        <span className="text-sm text-white cursor-pointer">Sign Out</span>
      </div>
        </div>
      </section>
    </div>
  );
};

const MenuSection = ({ title, items }) => (
  <div>
    <div className="px-4 py-2 mt-3 flex font-sans">
      <h1 className="text-lg text-white font-bold">{title}</h1>
    </div>
    {items.map((text, index) => (
      <div key={index} className="px-4 py-2">
        <span className="text-sm text-white cursor-pointer">{text}</span>
      </div>
    ))}
  </div>
);

MenuSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Header;
