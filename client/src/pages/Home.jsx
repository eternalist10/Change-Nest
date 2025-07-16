import React, { useState, useEffect } from 'react'

import { DisplayCampaigns, CustomButton } from '../components';
import { useStateContext } from '../context'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const navigate = useNavigate();

  const { login, setLogin, address, contract, getCampaigns, theme, connect } = useStateContext();

  // const navigate = useNavigate()

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if (login && contract) {
      fetchCampaigns()
    }
    setLogin(login)
  }, [login, address, contract]);

  return (
    <div className='relative flex flex-col'>
      {
        (login === true && address !== undefined) &&
        <DisplayCampaigns
          title="All Campaigns"
          isLoading={isLoading}
          campaigns={campaigns}
        />
      }
      {
        (login === true && address === undefined) &&
        <div className='flex flex-col gap-6 mx-auto'>
          <h1 className={`text-center text-2xl/9 font-bold ${theme === "dark" ? "text-white" : "text-[#1c1c24]"} tracking-tight`}> Connect your wallet to make transactions...</h1>
          <CustomButton
            btnType="button"
            title={"Connect"}
            styles={`
            ${address}
              ? bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-500 w-24 mx-auto
              : bg-[#8c6dfd]`
            }
            handleClick={() => {
              connect();
            }}
          ></CustomButton>
        </div>
      }
    </div >
  )
}
export default Home