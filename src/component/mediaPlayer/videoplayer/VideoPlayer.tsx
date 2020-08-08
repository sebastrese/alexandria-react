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
          playIcon
          className="w-full h-full "
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        />
      </div>
    </div>
  );
}
export default Video;
