import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import Tyo from "./pages/Tyo.jsx";
import Ohjelmointi from "./pages/Projektit.jsx";
import Taidetta from "./pages/Taidetta.jsx";

function App() {
  return (
    <>
      <div className="App">
        <ToastContainer theme="colored" />
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tyo-ja-opinnot" element={<Tyo />} />
            <Route path="/ohjelmointi" element={<Ohjelmointi />} />
            <Route path="/vektoritaide" element={<Taidetta />} />
          </Routes>
        </HashRouter>
      </div>
    </>
  );
}

export default App;
