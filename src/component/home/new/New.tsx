import React from "react";
import Notification from "../../notifications/notification/Notification";
function Home() {
  return (
    <div className="flex flex-col w-full lg:flex-row lg:flex-wrap">
      <div className="flex flex-col md:flex-row  w-full justify-center items-center p-8 lg:w-1/2 lg:flex-row lg:flex-wrap">
        <Notification
          heading={"TobyFox posted an article"}
          description="just now"
          image="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5a03207b4bbe6f37dda1fa34%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D963%26cropX2%3D4259%26cropY1%3D163%26cropY2%3D3456"
          content="/video"
        />
      </div>
      <div className="flex flex-col md:flex-row  w-full justify-center items-center p-8 lg:w-1/2 lg:flex-row lg:flex-wrap">
        <Notification
          heading={"Ayasa posted a brand new song"}
          description="5 minutes ago"
          image="https://img.discogs.com/YU14B_HIMqVWhiud--77N98lzRg=/600x399/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-5169838-1469414954-6864.jpeg.jpg"
          content="/video"
        />
      </div>
      <div className="flex flex-col md:flex-row  w-full justify-center items-center p-8 lg:w-1/2 lg:flex-row lg:flex-wrap">
        <Notification
          heading={"GMT posted a new podcast"}
          description="2 days ago"
          image="https://pbs.twimg.com/profile_images/1286595186559246339/CGjGxpz3.jpg"
          content="/video"
        />
      </div>
      <div className="flex flex-col md:flex-row  w-full justify-center items-center p-8 lg:w-1/2 lg:flex-row lg:flex-wrap">
        <Notification
          heading={"Dany Devito has posted a podcast"}
          description="1 day ago"
          image="https://cdn2.excelsior.com.mx/media/styles/large/public/pictures/2019/03/05/2109136.jpg"
          content="/video"
        />
      </div>
    </div>
  );
}
export default Home;
