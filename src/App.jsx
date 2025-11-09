// import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import OurService from "./pages/OurService";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import Testimonials from "./pages/Testimonials";
import Clints from './pages/Clints'
import GetInTouch from "./pages/GetInTouch";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurSolutions from "./pages/OurSolutions";
import Infrastructure from "./pages/Infrastructure";
import SoftwareLicensing from "./pages/SoftwareLicensing";
import Network from "./pages/Network";
import Security from "./pages/Security";

function App() {
  
  return (
    <>
      <div className="relative mt-0">
        <div className="sticky top-0 z-50">        <Nav /></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="ourService" element={<OurService />} >
            <Route path="infrastructure" element={<Infrastructure />} />
            <Route path="software-licensing" element={<SoftwareLicensing />} />
            <Route path="network" element={<Network />} />
            <Route path="security" element={<Security />} />
          
          </Route>
          <Route path="/ourSolutions" element={<OurSolutions/>} />
          <Route path="/clints" element={<Clints />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/getINTouch" element={<GetInTouch/>}/>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
