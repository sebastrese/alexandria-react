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
              heading={"Name placeholder"}
              description="Time placeholder"
              image="https://images.unsplash.com/photo-1587327903256-2265e70b5660?fit=crop&w=1950&q=80"
            />
            <Notification
              heading={"Donkey Kong has posted a book"}
              description="Time placeholder"
              image="https://i.imgur.com/986Wonz_d.webp?maxwidth=728&fidelity=grand"
            />
            <Notification
              heading={"Dany Devito has posted a podcast"}
              description="Time placeholder"
              image="https://cdn2.excelsior.com.mx/media/styles/large/public/pictures/2019/03/05/2109136.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Notifications;
