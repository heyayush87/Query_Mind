"use client";
import { assets } from "@/assets/assets";
import PromptBox from "@/Components/PromptBox";
import Sidebar from "@/Components/Sidebar";
import Image from "next/image";
import { useState } from "react";
import {Message} from "@/Components/Message"

export default function Home() {
  const [expand, setExpand] = useState(false);
  const [message, setMessage] = useState([]);
  const [isloading, setisloading] = useState(false);
  return (
    <div>
      <div className="flex h-screen ">
        {/** sidebar */}
        <Sidebar expand={expand} setExpand={setExpand} />
        <div className="flex-1 flex flex-col items-center justify-center px-4 pb-8 bg-[#292a2d] text-white relative">
          <div className="md:hidden absolute px-4 top-6 flex items-center justify-between w-full">
            <Image className="rotate-180 " src={assets.menu_icon} alt="" onClick={()=>expand?setExpand(false):setExpand(true) } />
            <Image className="opacity-70" src={assets.chat_icon} alt="" />
          </div>

          {message.length === 0 ? (<>
            <div className="flex items-center gap-3">
              <Image src={assets.logo_icon} alt="" className="h-16" />
              <p>Hi , I'm QueryMind AI</p>
            </div>
             <p className="text-sm mt-2">How Can I help you ?</p>
          </>) : (<div>
              <Message role="user" message="what is next.js"/>
          </div>)}
          <PromptBox isLoading={isloading} setisloading={setisloading} />
          <p className="text-xs absolute bottom-1 text-gray-500"> AI-generated , for reference Only</p>
        </div>
      </div>
    </div>
  );
}
 