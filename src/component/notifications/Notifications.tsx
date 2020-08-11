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
              content="/player"
            />
            <Notification
              heading={"Asad Mitchell has posted a book"}
              description="2 hours ago"
              image="https://cdn.pixabay.com/photo/2017/02/04/12/25/man-2037255_960_720.jpg"
              content="/book"
            />
            <Notification
              heading={"Dany Devito has posted a podcast"}
              description="1 day ago"
              image="https://cdn2.excelsior.com.mx/media/styles/large/public/pictures/2019/03/05/2109136.jpg"
              content="/podcast"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Notifications;
