/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

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
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

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
