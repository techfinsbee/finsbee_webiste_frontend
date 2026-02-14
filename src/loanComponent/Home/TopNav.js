// components/Home/TopNav.js
'use client';

import { useRouter } from 'next/navigation';
// import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function TopNav() {
  const router = useRouter();
//   const { i18n } = useTranslation();

  const reduxName = useSelector((state) => state.session.name);

  const [profileData, setProfileData] = useState({
    name: "",
    photo: "",
  });

  useEffect(() => {
    const name = localStorage.getItem("profile") || reduxName || "";
    const photo = localStorage.getItem("userPhoto") || "";
    setProfileData({ name, photo });
  }, [reduxName]);

  const avatarInitial = profileData.name ? profileData.name[0].toUpperCase() : "";

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div
      className="px-4 sm:px-6 py-4 flex justify-between items-center"
      style={{ background: "#592eff" }}
    >
      <div className="flex items-center space-x-3">
        <button
          type="button"
          onClick={() => router.push("/home")}
          className="flex items-center space-x-3 focus:outline-none"
          aria-label="Go to Home"
          title="Home"
        >
          <img
            src="/fb-logo.png"
            alt="FinsBee Mobile Logo"
            className="h-10 w-auto object-contain sm:hidden"
          />
          <img
            src="/fb-logo.png"
            alt="FinsBee Partner Logo"
            className="h-12 w-auto object-contain hidden sm:block"
          />
        </button>
      </div>

      <div className="flex items-center space-x-4">
        {/* <select
          onChange={handleLanguageChange}
          value={i18n.language}
          className="text-sm font-medium text-[#592eff] bg-white border border-gray-200 rounded-md px-2 py-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ffc73c]"
        >
          <option value="en">English</option>
        </select> */}

        <button
          onClick={() => router.push("/my-account")}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden flex items-center justify-center bg-white text-[#592eff] font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none"
        >
          {profileData.photo ? (
            <img
              src={profileData.photo}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            avatarInitial || "U"
          )}
        </button>
      </div>
    </div>
  );
}