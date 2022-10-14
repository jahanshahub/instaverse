import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import Notification from "./pages/Notification";

//dapp
import { DAppProvider } from "@usedapp/core";
import NFTDetail from "./pages/NFTDetail";

ReactDOM.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<DAppProvider config={{}}><Home /></DAppProvider>} />
        <Route path="/home" element={<DAppProvider config={{}}><Home /></DAppProvider>} />
        <Route path="/profile" element={<DAppProvider><Profile /></DAppProvider>} />
        <Route path="/explore" element={<DAppProvider config={{}}><Explore /></DAppProvider>} />
        <Route path="/detail" element={<DAppProvider config={{}}><NFTDetail /></DAppProvider>} />
        <Route path="/notification" element={<DAppProvider config={{}}><Notification /></DAppProvider>} />

      </Routes>
    </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
