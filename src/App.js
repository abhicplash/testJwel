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
import Zara from "./components/Zara";
import Video from "./components/Video";
// import Foot from "./components/Foot";
import { createBrowserRouter } from "react-router-dom";
import Collection from "./components/Collection";
// import { SliderData } from "./components/SliderData";
// import ImageSlider from "./components/ImageSlider";
function App() {
  return (
    <div className="main">
      {/* <Topbar /> */}
      <Navbar />
      <Botbar />
      <Banner />
      {/* <ImageSlider slides={SliderData} /> */}
      <Product />
      {/* <Zara/> */}
      <Videocard />
      <Video />
      {/* <Piccard /> */}
      {/* <True /> */}
      {/* <Get /> */}
      {/* <Gift /> */}
      <Footer />
      {/* <Foot /> */}
    </div>
  );
}
export default App;
export const appRouter = createBrowserRouter([{
  path: "/",
  element: <App />
}, {
  path: "/collections",
  element: <Collection />
}

])