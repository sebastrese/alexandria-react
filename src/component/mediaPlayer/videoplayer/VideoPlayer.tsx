import React from "react";
import ReactPlayer from "react-player";

function Video() {
  return (
    <div
      className="w-full viewport items-center animate__animated animate__fadeIn animate__faster 
    lg:py-4 lg:px-8"
    >
      <div className="safezone w-full h-full lg:max-w-screen-xl p-10">
        <ReactPlayer
          width=""
          controls
          playIcon
          className="w-full h-full "
          url="https://www.youtube.com/watch?v=Nt43ZEI4734"
        />
      </div>
      <div className=" w-full h-auto text-justify shadow-2xl">
        <h1 className="text-gray-500 text-3xl">Flowers</h1>
        <h2 className="text-gray-300 text-base">By: Josie Molina</h2>
        <div className="py-5 px-6 ">
          <h2>Description</h2>
          <a className="px-6">
            This are my favorite flowers on the world, i hope you guys like them
          </a>
        </div>
      </div>
    </div>
  );
}
export default Video;
