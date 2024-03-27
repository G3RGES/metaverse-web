/* eslint-disable no-unused-vars */
import React, { useState } from "react";

//components
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Quotes from "./Components/Quotes";
import Banner from "./Components/Banner";
import Banner2 from "./Components/Banner2";
import Features from "./Components/Features";
import AppStore from "./Components/AppStore";
import Footer from "./Components/Footer";
import PopupPlayer from "./Components/PopupPlayer";

//aos

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <main
      className="overflow-x-hidden bg-white dark:bg-black text-black dark:text-white
    duration-300"
    >
      <Navbar />
      <Hero togglePlay={togglePlay} />
      <Quotes />
      <Banner togglePlay={togglePlay} />
      <Banner2 togglePlay={togglePlay} />
      <Features />
      <AppStore />
      <Footer />

      {/* video player */}
      <PopupPlayer isPlaying={isPlaying} togglePlay={togglePlay} />
    </main>
  );
};

export default App;
