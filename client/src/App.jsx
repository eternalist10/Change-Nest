// import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { Sidebar, Navbar } from "./components";
import { CampaignDetails, CreateCampaign, Home, Profile, Login, Signup, SplashScreen } from "./pages";
import { useEffect } from "react";
import { useStateContext } from "./context";

const App = () => {

  const location = useLocation();
  const hideLayoutRoutes = ["/login", "/signup"];
  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);


  const { login, address, theme, setTheme, toggleTheme } = useStateContext()

  useEffect(() => {
    const themeState = localStorage.getItem("theme")
    if (themeState) {
      setTheme(themeState)
    }
    else {
      setTheme("dark")
    }
  }, [])

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-campaign" element={<CreateCampaign />} />
        <Route path="/campaign-details/:id" element={<CampaignDetails />} />
      </Routes>

      {!shouldHideLayout && (
        <div className={`relative sm:-8 p-4 pr-0 bg-[#13131a] min-h-screen flex`}>
          {(login === false && address === undefined) && <SplashScreen />}
          {/* {(login === true && address !== undefined) && (
            <>
              <div className="sm:flex hidden mr-10 relative">
                <Sidebar toggleTheme={toggleTheme} />
              </div>
              <div className="flex-1 max-sm:w-full mx-auto sm:pr-5">
                <Navbar />
              </div>
            </>
          )} */}
        </div>
      )}
    </div>
  );
};

export default App;
