import React from "react";
import { APPLICATION_NAME } from "../../core/config";
import { Link } from "react-router-dom";
import { Button } from "../../shared/component/Button";

// Styles
import "./Home.scss";

// Component
import { Banner } from "../../shared/component/Banner";
import { Helmet } from "react-helmet";
import New from "./new/New";
function Home() {
  return (
    <>
      <Helmet>
        <title>{APPLICATION_NAME + " - Home"}</title>
        <meta name="description" content={APPLICATION_NAME + " Home"} />
      </Helmet>
      <div
        className="viewport items-center animate__animated animate__fadeIn animate__faster 
            lg:py-4 lg:px-8"
      >
        <div className="safezone w-full h-full lg:max-w-screen-xl">
          <Banner
            heading={"Introducing " + APPLICATION_NAME}
            description="Share your knowledge with digital media you like."
          />
        </div>
        <div className="safezone w-full h-full lg:max-w-screen-xl">
          <div className="safezone w-full h-full lg:max-w-screen-xl">
            <h1 className=" flex-col p-2 text-3xl font-bold">Whats New</h1>

            <Link to="/" className="flex items-center">
              <Button
                className="flat-primary rounded-full px-3 font-semibold lg:text-base lg:px-5"
                action={() => {}}
              >
                More
              </Button>
            </Link>
            <New></New>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
