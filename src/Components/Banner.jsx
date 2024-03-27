/* eslint-disable no-unused-vars */
import React from "react";

// assets
import BannerPng from "../assets/banner1.png";

// icons
import { BiPlayCircle } from "react-icons/bi";

const Banner = ({ togglePlay }) => {
  return (
    <div className="py-12 sm:py-0 relative">
      <div className="container min-h-[620px] flex items-center ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center ">
          {/* image section */}
          <div>
            <img
              className=" w-full max-w-[400px] "
              src={BannerPng}
              alt="banner_img"
            />
          </div>
          {/* text section */}
          <div className="lg:pr-20 relative">
            <div className="relative z-10 space-y-5">
              <h1 className="text-4xl font-semibold ">
                GET READY TO ENJ0Y VR{" "}
                <span
                  className="bg-clip-text text-transparent bg-gradient-to-l from-primary
                to-secondary"
                >
                  MOVIES WITH OUR PLATFORM
                </span>
              </h1>

              <p data-aos="fade-up" data-aos-delay="300">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                molestias quia exercitationem ex inventore labore beatae cumque
                et quaerat voluptas?
              </p>

              <div className="flex gap-6">
                <button className="primary-btn">Get Started</button>
                <button
                  onClick={togglePlay}
                  className="flex items-center gap-2"
                >
                  <BiPlayCircle className="text-3xl" />
                  See Demo
                </button>
              </div>
            </div>
            {/* backgrond color blob */}
            <div
              className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary 
            rounded-full absolute 
            bottom-[-50px] left-[300px] blur-3xl opacity-50"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
