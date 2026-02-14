// components/Home/Sidebar.js
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User, Users, CreditCard } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  const baseLinkStyle = 'group flex items-center space-x-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 hover:scale-[1.03]';

  const activeStyle = {
    background: 'rgba(89, 46, 255, 0.15)',
    boxShadow: 'inset 1px 1px 2px rgba(255, 255, 255, 0.05), inset -1px -1px 2px rgba(0, 0, 0, 0.2)',
  };

  const iconContainerStyle = {
    background: 'rgba(255, 255, 255, 0.04)',
    boxShadow: '2px 2px 4px rgba(0,0,0,0.3), -2px -2px 4px rgba(255,255,255,0.05)',
  };

  return (
    <div
      className="hidden sm:flex flex-col w-64 h-screen border-r border-[#3b3b5a]/50 p-6 shadow-xl fixed left-0 top-0 z-10"
      style={{
        background: 'linear-gradient(180deg, #2a2442 0%, #1c1833 100%)',
        boxShadow: 'inset -3px -3px 6px rgba(255, 255, 255, 0.05), inset 3px 3px 8px rgba(0, 0, 0, 0.3), 6px 6px 16px rgba(0, 0, 0, 0.5)',
      }}
    >
      <div className="mb-10">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#ffc73c] to-[#592eff] bg-clip-text text-transparent">
          My DashBoard
        </h2>
        <div className="w-12 h-0.5 bg-gradient-to-r from-[#ffc73c] to-[#592eff] mt-2 rounded-full shadow-md" />
      </div>

      <nav className="space-y-2">
        <Link href="/my-account" className={baseLinkStyle} style={isActive('/my-account') ? activeStyle : {}}>
          <div className="p-2 rounded-lg" style={iconContainerStyle}>
            <User className={`w-5 h-5 ${isActive('/my-account') ? 'text-[#ffc73c]' : 'text-white/80'} transition-colors`} />
          </div>
          <span className={`text-sm font-medium transition-colors ${isActive('/my-account') ? 'text-white' : 'text-white/70'}`}>
            My Account
          </span>
        </Link>

        {/* Add more links as needed */}
      </nav>

      <div className="mt-auto pt-6">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#3b3b5a] to-transparent" />
        <div className="mt-4 text-xs text-white/50 text-center">
          © 2025 FinsBee Partner
        </div>
      </div>
    </div>
  );
}