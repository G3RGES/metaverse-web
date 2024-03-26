/* eslint-disable no-unused-vars */
import React from "react";

// assets
import BannerPng from "../assets/banner2.png";

// icons
import { BiPlayCircle } from "react-icons/bi";

const Banner2 = () => {
  return (
    <div className="py-12 sm:py-0 relative">
      <div className="container min-h-[620px] flex items-center ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center ">
          {/* text section */}
          <div className="order-2 sm:order-1 lg:pr-20 relative">
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
                <button className="flex items-center gap-2">
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

          {/* image section */}
          <div className="order-1 sm:order-2">
            <img
              className=" w-full max-w-[400px] "
              src={BannerPng}
              alt="banner_img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
