import React from "react";
import { Button } from "../../../shared/component/Button";
import { Link } from "react-router-dom";

function Collections() {
  return (
    <div className="">
      <div className="flex justify-center grid-cols-2 ">
        <div className="p-10">
          <Link to="/favorites" className="flex flex-col items-center">
            <Button
              className="h-56 w-56 justify-center flat-primary bg-pink-300 rounded-lg px-3 font-semibold lg:text-base lg:px-5"
              action={() => {}}
            >
              <span className="material-icons ">favorite</span>
            </Button>
            <span>Favorites</span>
          </Link>
        </div>
        <div className="p-10">
          <Link to="/history" className="flex flex-col items-center">
            <Button
              className="h-56 w-56 justify-center flat-primary bg-indigo-dark rounded-lg px-3 font-semibold lg:text-base lg:px-5"
              action={() => {}}
            >
              <span className="material-icons ">history</span>
            </Button>
            <span>History</span>
          </Link>
        </div>
      </div>
      <div className="flex justify-center grid-cols-2 ">
        <div className="p-10">
          <Link to="/posts" className="flex flex-col items-center">
            <Button
              className="h-56 w-56 justify-center flat-primary bg-orange-600 rounded-lg px-3 font-semibold lg:text-base lg:px-5"
              action={() => {}}
            >
              <span className="material-icons text-4xl">text_snippet</span>
            </Button>
            <span>Posts</span>
          </Link>
        </div>
        <div className="p-10">
          <Link to="/code" className="flex flex-col items-center">
            <Button
              className=" h-56 w-56 justify-center flat-primary bg-gray-600 rounded-lg px-3 font-semibold lg:text-base lg:px-5"
              action={() => {}}
            >
              <span className="material-icons ">code</span>
            </Button>
            <span>Code</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Collections;
