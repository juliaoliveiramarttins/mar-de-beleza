import Home from "./pages/home/index";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Error from "./pages/error";
import { Routes, Route } from "react-router-dom";
import React from 'react';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/error" element={<Error/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
