/* eslint-disable no-unused-vars */
import React from "react";

// icons
import { IoClose } from "react-icons/io5";

const PopupPlayer = ({ isPlaying, togglePlay }) => {
  return (
    <>
      {isPlaying && (
        <div
          className="fixed z-[9999] top-0 left-0 w-full h-full
         bg-black/70 backdrop-blur-sm "
        >
          <div className="">
            <div className="">
              {/* header section */}
              <div className="">
                <h1 className="">Metaverse</h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupPlayer;
