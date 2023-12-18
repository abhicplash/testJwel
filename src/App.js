import React from "react";
import "./App.css";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Botbar from "./components/Botbar";
import Banner from "./components/Banner";
import Product from "./components/Product";
import Videocard from "./components/Videocard";
import Piccard from "./components/Piccard";
import True from "./components/True";
import Get from "./components/Get";
import Gift from "./components/Gift";
import Footer from "./components/Footer";

function App() {  
  return (
    <div className="main">
      <Topbar />
      <Navbar />
      <Botbar />
      <Banner />
      <Product />
      <Videocard />
      <Piccard />
      <True />
      <Get />
      <Gift />
      <Footer />
    </div>
  );
}

export default App;
