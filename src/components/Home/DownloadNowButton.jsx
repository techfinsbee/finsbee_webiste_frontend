import React from "react";

const DownloadNowButton = ({COLOR}) => {
  return (
    <>
      <div className={`flex gap-2 rounded-[50px] w-fit p-4`} style={{
        backgroundColor: COLOR?"#18ADA5":"#97F15D",
      }}>
        <div>
          <h1 className="text-xl font-semibold">Download Now</h1>
        </div>
        <div className="flex gap-2">
          <div>
            <img src="/play_logo.png" className="w-7 h-7 download" alt="" />
          </div>
          <div>
            <img src="/apple_logo.png" className="w-6 h-6 download" alt="" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .download:hover{
          transform: scale(1.1);
          transition: all 0.3s ease-in-out;
        }
      `}</style>
    </>
  );
};

export default DownloadNowButton;
