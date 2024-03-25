/* eslint-disable no-unused-vars */
import React from "react";

//components
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Quotes from "./Components/Quotes";
import Banner from "./Components/Banner";

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
    </main>
  );
};

export default App;
