import React from "react";
import Notification from "../../notifications/notification/Notification";
function Home() {
  return (
    <div className="flex flex-col w-full lg:flex-row lg:flex-wrap">
      <div className="flex flex-col md:flex-row  w-full justify-center items-center p-8 lg:w-1/2 lg:flex-row lg:flex-wrap">
        <Notification
          heading={"Name placeholder"}
          description="Time placeholder"
          image="https://images.unsplash.com/photo-1587327903256-2265e70b5660?fit=crop&w=1950&q=80"
        />
      </div>
      <div className="flex flex-col md:flex-row  w-full justify-center items-center p-8 lg:w-1/2 lg:flex-row lg:flex-wrap">
        <Notification
          heading={"Name placeholder"}
          description="Time placeholder"
          image="https://images.unsplash.com/photo-1587327903256-2265e70b5660?fit=crop&w=1950&q=80"
        />
      </div>
      <div className="flex flex-col md:flex-row  w-full justify-center items-center p-8 lg:w-1/2 lg:flex-row lg:flex-wrap">
        <Notification
          heading={"Name placeholder"}
          description="Time placeholder"
          image="https://images.unsplash.com/photo-1587327903256-2265e70b5660?fit=crop&w=1950&q=80"
        />
      </div>
      <div className="flex flex-col md:flex-row  w-full justify-center items-center p-8 lg:w-1/2 lg:flex-row lg:flex-wrap">
        <Notification
          heading={"Name placeholder"}
          description="Time placeholder"
          image="https://images.unsplash.com/photo-1587327903256-2265e70b5660?fit=crop&w=1950&q=80"
        />
      </div>
    </div>
  );
}
export default Home;
