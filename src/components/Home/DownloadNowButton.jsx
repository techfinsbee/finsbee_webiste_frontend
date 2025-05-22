import React from "react";
import { Link } from "react-router-dom";
const DownloadNowButton = ({ COLOR }) => {
  return (
    <>
      <div
        className={`flex gap-2 rounded-[50px] w-fit p-3`}
        style={{
          backgroundColor: COLOR ? "#18ADA5" : "#97F15D",
        }}
      >
        <div>
          <h1 className="text-lg font-semibold">Download Now</h1>
        </div>
        <div className="flex gap-1">
          <Link to="https://play.google.com/store/apps/details?id=com.fundsmama.personalloan">
            <div>
              <img src="/play_logo.png" className="w-7 h-7 download" alt="" />
            </div>
          </Link>
          <Link to="">
          <div>
            <img src="/apple_logo.png" className="w-6 h-6 download" alt="" />
          </div>
          </Link>
          
        </div>
      </div>
      <style jsx>{`
        .download:hover {
          transform: scale(1.3);
          transition: all 0.3s ease-in-out;
        }
      `}</style>
    </>
  );
};

export default DownloadNowButton;
