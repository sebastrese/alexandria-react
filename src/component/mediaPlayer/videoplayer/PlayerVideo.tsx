import React from "react";
import { Button } from "../../../shared/component/Button";
import { Link, Switch } from "react-router-dom";

import PropTypes from "prop-types";
/**
 * @param {string} props.title title
 * @param {string} props.autor autor
 * @param {string} props.pic background pic
 */

function Player(props: IProps) {
  return (
    <div
      className="grid grid-cols-3  viewport bg-black items-center animate__animated animate__fadeIn animate__faster 
    lg:py-4 lg:px-8"
    >
      <div className="safezone flex content-end flex-wrap col-span-1 w-full h-full lg:max-w-screen-xl ">
        <div className=" flex flex-col p-6">
          <span className="font-sans text-3xl pt-6 ">{props.title}</span>
          <span className="font-sans text-sm pt-6">{props.autor}</span>
          <div className="pt-6">
            <div className=" flex flex-row space-x-6 font-bold">
              <button className="rounded-full py-2 px-4 items-center border border-gray-800">
                Games
              </button>
              <button className="rounded-full py-2 px-4 items-center border border-gray-800">
                Art
              </button>
            </div>
          </div>
          <div className="flex justify-center pt-6">
            <Link to="/video" className="flex items-center">
              <Button
                className="h-16 w-32 flat-primary rounded-full px-3 font-semibold lg:text-base lg:px-5"
                action={() => {}}
              >
                Play
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="col-span-2 bg-red-700 w-full h-screen lg:max-w-screen-xl">
        <img src={props.pic} className="h-full w-full object-cover"></img>
      </div>
    </div>
  );
}

interface IProps {
  title: string;
  autor: string;
  pic: string;
}

Player.propTypes = {
  title: PropTypes.string,
  autor: PropTypes.string,
  pic: PropTypes.string,
};

function HomeSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      Loading...
    </div>
  );
}

export default Player;
