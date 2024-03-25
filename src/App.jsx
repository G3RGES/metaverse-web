/* eslint-disable no-unused-vars */
import React from "react";

//components
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Quotes from "./Components/Quotes";

const App = () => {
  return (
    <main className="overflow-x-hidden bg-white dark:bg-black">
      <Navbar />
      <Hero />
      <Quotes />
    </main>
  );
};

export default App;
