/* eslint-disable no-unused-vars */
import React from "react";

//components
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Quotes from "./Components/Quotes";
import Banner from "./Components/Banner";
import Banner2 from "./Components/Banner2";
import Features from "./Components/Features";
import AppStore from "./Components/AppStore";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <main
      className="overflow-x-hidden bg-white dark:bg-black text-black dark:text-white
    duration-300"
    >
      <Navbar />
      <Hero />
      <Quotes />
      <Banner />
      <Banner2 />
      <Features />
      {/* <AppStore /> */}
      {/* <Footer /> */}
    </main>
  );
};

export default App;
