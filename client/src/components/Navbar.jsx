// import React from "react";
import { useNavigate } from "react-router-dom";

import { useStateContext } from "../context";
import { CustomButton } from "./";
import { search } from "../assets";

const Navbar = ({ disabled }) => {
  const navigate = useNavigate();
  // const [isActive, setIsActive] = useState("dashboard");
  // const [toggleDrawer, setToggleDrawer] = useState(false);
  const { login, address, handleLogout, theme } = useStateContext();


  return (
    <div className="flex justify-between mb-[35px] gap-6">

      {login && address && <div className={`lg:flex-1 flex max-w-[458px] py-2 pl-4 pr-2 h-[52px] ${theme === "dark" ? "bg-slate-200" : "bg-[#1c1c24]"} rounded-[100px] shadow-slate-500 shadow-lg`}>

        <input
          type="text"
          placeholder="Search for campaigns"
          className={`flex w-full font-epilogue font-normal text-[14px] ${theme === "dark" ? "placeholder:text-slate-800 text-slate-800" : "placeholder:text-[#d3d3d3] text-white"} bg-transparent outline-none`}></input>

        <div className="w-[72px] h-full rounded-[20px] bg-gradient-to-r from-indigo-500 from-10% to-emerald-500 to-90% flex justify-center items-center cursor-pointer">
          <img
            src={search}
            alt="search"
            className="w-[15px] h-[15px] object-contain"
          ></img>
        </div>
      </div>
      }

      <div className="sm:flex hidden gap-1 *:shadow-slate-500 *:shadow-2xl">

        {/* {navlinks.map((link) => (
          link.name === "profile" &&
          <>
            <Icon
              key={link.name}
              {...link}
              styles={"rounded-lg"}
              isActive={isActive}
              handleClick={() => {
                if (!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
            />
          </>
        ))} */}

        {(login && address) &&
          <CustomButton
            btnType="button"
            title={"Create a campaign"}
            styles="bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-500 w-auto mx-auto"
            handleClick={() => {
              navigate("create-campaign")
            }}
          ></CustomButton>}

        <CustomButton btnType="button" styles={`${(login && address) ? "mx-2 bg-[#8c6dfd]" : "mx-2 bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-500 "}`} title={(login && address) ? "Logout" : "Login"} handleClick={
          () => {
            {
              login && address ?
                handleLogout() : navigate("login")
            }
          }
        }></CustomButton>

        {!(login && address) &&
          <CustomButton btnType="button" styles="bg-[#fd6d6d]" title="Signup" handleClick={
            () => {
              navigate("signup")
            }
          }></CustomButton>}

      </div>

      {/* Mobile */}
      {/* <div className="sm:hidden flex justify-between items-center relative ">
        <div className="w-[40px] h-[40px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer">
          <img
            src={logo}
            alt="user"
            className="w-[60%] h-[60%] object-contain"
          ></img>
        </div>
        <img
          src={menu}
          alt="menu"
          className="w-[34px] h-[34px] object-contain cursor-pointer"
          onClick={() => {
            setToggleDrawer((prev) => !prev);
          }}
        ></img>

        <div
          className={`absolute top-[60px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4 ${!toggleDrawer ? "-translate-y-[100vh]" : "translate-y-0"
            } transition-all duration-700`}
        >
          <ul className="mb-4">
            {navlinks.map((link) => (
              <li
                key={link.name}
                className={`flex p-4 ${isActive === link.name && "bg-[#3a3a43]"
                  }`}
                onClick={() => {
                  setIsActive(link.name);
                  setToggleDrawer(false);
                  navigate(link.link);
                }}
              >
                <img
                  src={link.imgUrl}
                  alt={link.name}
                  className={`w-[24px] h-[24px] object-contain ${isActive === link.name ? "grayscale-0" : "grayscale"
                    }`}
                ></img>
                <p
                  className={`ml-[20px] font-epilogue font-semibold text-[14px] ${isActive === link.name ? "text-[#1dc071]" : "text-[#808191]"
                    }`}
                >
                  {link.name}
                </p>
              </li>
            ))}
          </ul>
          <div className="flex mx-4">
            <CustomButton
              btnType="button"
              title={address ? "Create a Campaign" : "Connect"}
              styles={`me-2 ${{ address } ? "bg-[#1dc071]" : "bg-[#8c6dfd]"}`}
              handleClick={() => {
                if (address) navigate("create-campaign");
                else connect();}}></CustomButton>
          </div>
        </div>
      </div> */}
    </div >
  );
};

export default Navbar;
