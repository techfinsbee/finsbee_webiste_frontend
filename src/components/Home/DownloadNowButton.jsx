import React from "react";
import { Link } from "react-router-dom";

const DownloadNowButton = () => {
  return (
    <div className="flex gap-4 items-center ml-1">
      {/* Google Play Badge */}
      <Link
        to="https://play.google.com/store/apps/details?id=com.fundsmama.personalloan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/img/Play.png"
          className="h-12 hover:scale-105 transition-transform download"
          alt="Get it on Google Play"
        />
      </Link>

      {/* App Store Badge */}
      <Link
        to=""
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/img/App.png"
          className="h-12 hover:scale-105 transition-transform download"
          alt="Download on the App Store"
        />
      </Link>

      {/* Hover effect (optional) */}
      <style jsx>{`
        .download:hover {
          transform: scale(1.05);
          transition: all 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default DownloadNowButton;
