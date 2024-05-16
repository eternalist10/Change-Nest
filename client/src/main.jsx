import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
// import { createThirdwebClient, getContract } from "thirdweb";
import { ThirdwebProvider } from "@thirdweb-dev/react";
// import { defineChain } from "thirdweb/chains";
import { StateContextProvider } from "./context";
import App from "./App";
import "./index.css";

// export const client = createThirdwebClient({
//   clientId: "1ce5ff4cc7ce8141f1d410325b5f9232",
// });

// export const contract = getContract({
//   client,
//   chain: defineChain(11155111),
//   address: "0xdD9D9CDd491e528A2df1341473E2a755813F5EaE",
// });

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThirdwebProvider
    activeChain="sepolia"
    clientId="1ce5ff4cc7ce8141f1d410325b5f9232"
  >
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
);
