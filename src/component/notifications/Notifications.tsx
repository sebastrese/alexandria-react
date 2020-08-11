import React from "react";
import "../notifications/Notifications";
import Notification from "./notification/Notification";
function Notifications() {
  return (
    <>
      <div
        className="viewport items-center animate__animated animate__fadeIn animate__faster 
    lg:py-4 lg:px-8"
      >
        <div className="safezone w-full h-full lg:max-w-screen-xl p-10">
          <h1 className="p-2 text-3xl font-bold">Notifications</h1>
          <div className="safezone w-full lg:max-w-screen-xl">
            <Notification
              heading={"Josie Molina posted a new video"}
              description="10 minutes ago"
              image="https://cdn.pixabay.com/photo/2017/09/01/21/53/blue-2705642_960_720.jpg"
              content="/playerVideo"
            />
            <Notification
              heading={"Ayasa updated a new song"}
              description="2 hours ago"
              image="https://img.discogs.com/YU14B_HIMqVWhiud--77N98lzRg=/600x399/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-5169838-1469414954-6864.jpeg.jpg"
              content="/playerAudio"
            />
            <Notification
              heading={"Dany Devito has posted a new book"}
              description="1 day ago"
              image="https://cdn2.excelsior.com.mx/media/styles/large/public/pictures/2019/03/05/2109136.jpg"
              content="/playerText"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Notifications;
