/* eslint-disable no-unused-vars */
import React from "react";

// assets
import AppStoreImg from "../assets/website/app_store.png";
import PlayStoreImg from "../assets/website/play_store.png";

const AppStore = () => {
  return (
    <>
      <div className="container py-10 sm:min-h-[400px] sm:grid sm:place-items-center ">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1
            data-aos="zoom-in"
            className="text-2xl text-center sm:text-4xl font-semibold"
          >
            Get Started With Our App
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-center sm:px-20"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            magnam harum accusantium odit?
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <a data-aos="fade-right" data-aos-delay="500" href="#">
              <img
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px] "
                src={PlayStoreImg}
                alt="playstore_image"
              />
            </a>
            <a data-aos="fade-left" data-aos-delay="500" href="#">
              <img
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px] "
                src={AppStoreImg}
                alt="appstore_image"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
