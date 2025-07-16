import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { logo, sun } from "../assets";
import { navlinks } from "../constants";
import { useStateContext } from "../context";
import Tooltip from "./Tooltip";
// import { useStateContext } from "../context";

export const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick, tooltip }) => (
  <Tooltip text={tooltip}>
    <div
      className={`w-[48px] h-[48px] rounded-[10px] flex justify-center items-center  ${!disabled && "cursor-pointer"
        } ${styles}`}
      data-tip={tooltip}
      onClick={handleClick}

    >
      {!isActive ? (
        <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
      ) : (
        <img
          src={imgUrl}
          alt="fund_logo"
          className={`w-1/2 h-1/2 ${isActive !== name && "grayscale"}`}
        />
      )}
    </div>
  </Tooltip>
);

const Sidebar = ({ toggleTheme }) => {

  const [isActive, setIsActive] = useState("dashboard");
  const navigate = useNavigate();
  const { login, theme } = useStateContext()

  const capitalizeFirstLetter = (word) => {
    return String(word).charAt(0).toUpperCase() + String(word).slice(1);
  }

  const handleTheme = () => {
    if (localStorage.getItem("theme") === "dark") {
      toggleTheme("light")
    }
    else if (localStorage.getItem("theme") === "light") {
      toggleTheme("dark")
    }
  }

  return (
    <div className={`flex justify-between items-center flex-col sticky top-5 h-[93vh] ${!login && "pointer-events-none"}`}>

      <Link to="/">
        <Icon styles="w-[52px] h-[52px]" imgUrl={logo} />
      </Link>

      <div className={`flex-1 flex flex-col justify-between items-center ${theme === "dark" ? "bg-slate-200" : "bg-[#1c1c24]"} shadow-slate-600 shadow-xl rounded-[20px] w-[76px] py-4 mt-12`}>
        <div className="flex flex-col justify-center items-center gap-3">
          {navlinks.map((link) => (
            <Icon
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                if (!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
              tooltip={capitalizeFirstLetter(link.name)}
            />
          ))}
        </div>

        <Icon imgUrl={sun} handleClick={() => handleTheme()} tooltip="Toggle Theme" />
      </div>
    </div >
  );
};

export default Sidebar;
