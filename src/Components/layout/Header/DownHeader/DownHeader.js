"use client"
import React from "react";
import LargeMenu from "../../../SiteMenu/LargeMenu/LargeMenu";
import MobileMenu from "../../../SiteMenu/MobileMenu/MobileMenu";

export default function DownHeader() {
  return (
    <div className="w-full bg-[#1d1d1ded] ">
      <div className="global-w flex items-center justify-between">
      <div className="flex lg:hidden">
   
      <MobileMenu />
       </div>
       <div className=" hidden lg:flex">
       <LargeMenu/>
       </div>
      
        <form action="">
          <input type="text" placeholder="search..." />
        </form>
      </div>
    </div>
  );
}
