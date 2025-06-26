import Image from "next/image";
import React from "react";
import { assets } from "@/assets/assets";
import {useClerk , UserButton} from '@clerk/nextjs'
import {useAppContext}  from "@/Context/AppContext"
import Chatlabel from "@/components/Chatlabel";

const Sidebar = ({ expand, setExpand }) => {
    const {openSignIn}=useClerk();
    const {user}=useAppContext()
  return (
    <div
      className={`flex flex-col justify-between bg-[#212327] pt-7 transition-all z-50 max-md:absolute max-md:h-screen ${
        expand ? "p-4 w-64" : "md:w-20 w-0 max-md:overflow-hidden"
      }`}
    >
      {/* Top Section */}
      <div>
        {/* Logo and Toggle */}
        <div
          className={`flex ${
            expand ? "flex-row gap-10" : "flex-col items-center gap-8"
          }`}
        >
          <Image
            className={expand ? "w-36" : "w-10"}
            src={expand ? assets.logo_text : assets.logo_icon}
            alt="logo"
            width={100}
            height={100}
          />

          <div
            onClick={() => setExpand(!expand)}
            className="group relative flex items-center justify-center hover:bg-gray-500/20 transition-all duration-300 h-9 w-9 aspect-square rounded-lg cursor-pointer"
          >
            <Image
              src={assets.menu_icon}
              alt="menu"
              className="md:hidden"
              width={24}
              height={24}
            />
            <Image
              src={expand ? assets.sidebar_close_icon : assets.sidebar_icon}
              alt="toggle"
              className="hidden md:inline w-7"
              width={28}
              height={28}
            />
            <div
              className={`absolute w-max ${
                expand ? "left-1/2 -translate-x-1/2 top-12" : "-top-12 left-0"
              } opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-2 rounded-lg shadow-lg pointer-events-none`}
            >
              {expand ? "close-sidebar" : "open-sidebar"}
            </div>
          </div>
        </div>

        {/* New Chat Button */}
        <button
          className={`mt-8 flex items-center justify-center cursor-pointer ${
            expand
              ? "bg-primary hover:opacity-90 rounded-2xl gap-2 p-2.5 w-max"
              : "group relative h-9 w-9 mx-auto hover:bg-gray-500/30 rounded-lg"
          }`}
        >
          <Image
            className={expand ? "w-6" : "w-7"}
            src={expand ? assets.chat_icon : assets.chat_icon_dull}
            alt="chat"
            width={28}
            height={28}
          />
          {expand && <p className="text-white text-sm font-medium">New Chat</p>}
          {!expand && (
            <div className="absolute w-max -top-12 -right-12 opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-2 rounded-lg shadow-lg pointer-events-none">
              New Chat
              <div className="w-3 h-3 absolute bg-black rotate-45 left-4 -bottom-1.5"></div>
            </div>
          )}
        </button>

        {/* Recents */}
        <div
          className={`mt-8 text-white/25 text-sm ${
            expand ? "block" : "hidden"
          }`}
        >
          <p className="">Recents</p>
          <Chatlabel/>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-auto w-full">
        {/* Phone Icon and QR - separate group */}
        <div className="relative group w-full">
          {/* QR Code */}
          <div
            className={`absolute bottom-14 left-1/2 -translate-x-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          >
            <div className="relative w-max bg-black text-white text-sm p-3 rounded-lg shadow-lg">
              <Image src={assets.qrcode} className="w-44" alt="QR Code" />
              <p className="mt-2 text-center">Scan to get Query Mind</p>
              <div className="w-3 h-3 absolute bg-black rotate-45 left-1/2 -translate-x-1/2 -bottom-1.5" />
            </div>
          </div>

          {/* Phone + Text */}
          <div
            className={`w-full flex items-center justify-center gap-2 p-2 mb-4 cursor-pointer ${
              expand
                ? "border border-primary rounded-lg hover:bg-white/10"
                : "h-10 hover:bg-gray-500/30 rounded-lg justify-center"
            }`}
          >
            <Image
              className={expand ? "w-5" : "w-6"}
              src={expand ? assets.phone_icon : assets.phone_icon_dull}
              alt="phone"
            />
            {expand && (
              <div className="flex items-center gap-1 text-white text-sm">
                <span>Get App</span>
                <Image alt="new" src={assets.new_icon} className="w-4 h-4" />
              </div>
            )}
          </div>
        </div>

        {/* Profile (outside group) */}
        <div
        onClick={user ? null :openSignIn}
          className={`flex items-center ${
            expand ? "hover:bg-white/10 rounded-lg" : "justify-center w-full"
          } gap-3 text-white/60 text-sm p-2 mt-2 cursor-pointer`}
        >
            {
                user ? <UserButton/>:<Image src={assets.profile_icon} alt="" className="w-7" />
            }
          
          {expand && <span>My Profile</span>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
