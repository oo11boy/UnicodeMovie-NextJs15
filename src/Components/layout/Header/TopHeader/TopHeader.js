import SignBtn, { DarkModeToggle } from "@/Components/Btns/Btns";
import React from "react";
import { LuUserPlus } from "react-icons/lu";
import { PiSignIn } from "react-icons/pi";
export default function TopHeader() {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex justify-start space-x-2 items-center">
        <SignBtn text={"Sign Up"} icon={<LuUserPlus />} />
        <SignBtn text={"Sign In"} icon={<PiSignIn />} />
      </div>
      <div className="flex justify-end space-x-2 items-center">
   
        <div>
          <DarkModeToggle />
        </div>

        <div>
          {/* if dark: */}
          <img
          className="w-[247px] object-cover"
            src="https://digimoviez.com/wp-content/uploads/2023/09/logo-light.png"
            alt=""
          />

              
        </div>
      </div>
    </div>
  );
}
