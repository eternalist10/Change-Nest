import React from 'react'
import { changeNest } from "../assets";
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../context';

const SplashScreen = () => {

  const { theme } = useStateContext();
  const navigate = useNavigate();

  return (
    <div className='flex flex-col justify-center mx-auto'>
      <img src={changeNest} className="mx-auto w-auto h-auto"></img>
      <div className='flex flex-col gap-2 mx-auto my-3 text-center font-bold tracking-tight'>
        <h1 className={`${theme === "dark" ? "text-white" : "text-[#1c1c24]"}`}> Connect your wallet to access Create Nest.</h1>
        <h6 className='text-slate-400'>Login to your existing <span className="font-semibold text-indigo-600 hover:text-indigo-500 hover:animate-spin cursor-pointer" onClick={() => { navigate("/login") }}>
          Create Nest
        </span> account or <span className="font-semibold text-indigo-600 hover:text-indigo-500 hover:animate-spin cursor-pointer" onClick={() => { navigate("/signup") }}>
            Create a new one.
          </span>
        </h6>
      </div>
    </div>
  )
}

export default SplashScreen;