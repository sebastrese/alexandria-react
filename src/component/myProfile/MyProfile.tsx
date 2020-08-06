import React from "react";
import Banner from "./profileBanner/ProfileBanner";
function MyProfile() {
  return (
    <div
      className="viewport items-center animate__animated animate__fadeIn animate__faster 
            lg:py-4 lg:px-8"
    >
      <div className="safezone w-full h-full lg:max-w-screen-xl">
        <Banner
          image="https://images.unsplash.com/photo-1474552226712-ac0f0961a954?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"
          pic="https://images.unsplash.com/photo-1474978528675-4a50a4508dc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          name="Cirilla"
          likes="16"
          following="10"
          posts="20"
        />
      </div>
    </div>
  );
}

export default MyProfile;
