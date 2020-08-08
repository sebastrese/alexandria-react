import React from "react";
import { Button } from "../../shared/component/Button";
import { Link } from "react-router-dom";
function Player() {
  return (
    <div
      className="grid grid-cols-3  viewport bg-black items-center animate__animated animate__fadeIn animate__faster 
    lg:py-4 lg:px-8"
    >
      <div className="flex content-end flex-wrap col-span-1 border border-teal-400 w-full h-full lg:max-w-screen-xl">
        <div className=" flex flex-col p-6">
          <span className="pt-6 ">nombre</span>
          <span className="pt-6">autor</span>
          <div className="pt-6">
            <span>botones</span>
          </div>
          <div className="flex justify-center pt-6">
            <Link to="/" className="flex items-center">
              <Button
                className="h-16 w-32 flat-primary rounded-full px-3 font-semibold lg:text-base lg:px-5"
                action={() => {}}
              >
                Play
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="col-span-2 border bg-red-700 border-teal-400  w-full h-full lg:max-w-screen-xl">
        <img
          src="https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_Minecraft_image1600w.jpg"
          className="h-full w-full object-cover"
        ></img>
      </div>
    </div>
  );
}
export default Player;
