import React from "react";
import { Button } from "../../../shared/component/Button";
import PropTypes from "prop-types";

import "./ProfileBanner.scss";
import { changeTheme } from "../../../shared/service/theme";
/**
 * @param {string} props.banner banner image URL
 * @param {string} props.uname User name
 * @param {string} props.pic Profile pic
 * @param {string} props.following following
 * @param {string} props.likes liked posts
 * @param {string} props.posts number of posts
 */
function ProfileBanner(props: IProps) {
  return (
    <div
      className="viewport items-center animate__animated animate__fadeIn animate__faster 
            lg:py-4 lg:px-8"
    >
      <div className="safezone w-full h-full lg:max-w-screen-xl items-center">
        <div className="banner object-cover">
          <div className=" relative h-56 bg-red-500 pb-64">
            <img
              src={props.image}
              className="absolute h-full w-full object-cover"
            ></img>
          </div>
        </div>
        <div className="User flex flex-col items-center">
          <div className="relative picture -mt-20">
            <img
              src={props.pic}
              className="rounded-full w-40 h-40 shadow-lg lg:max-w-screen-xl object-cover border-solid border-8 border-white-600"
            />
          </div>

          <span className="text-3xl  font-bold mb-1 lg:text-4xl pt-8 px-8">
            {props.name}
          </span>
          <div className="userData pt-4 flex flex-row ">
            <span className="items-center flex flex-col text-3xl font-bold mb-1 lg:text-4xl px-8">
              {props.following}
              <h1>Following</h1>
            </span>
            <span className="items-center flex flex-col text-3xl font-bold mb-1 lg:text-4xl px-8">
              {props.likes}
              <h1>Likes</h1>
            </span>
            <span className="items-center flex flex-col text-3xl font-bold mb-1 lg:text-4xl px-8">
              {props.posts}
              <h1>Posts</h1>
            </span>
          </div>
        </div>
        <div className="flex flex-row">
          <Button
            type="icon"
            className="stroke-default"
            action={() => changeTheme()}
          >
            {""}
            <span className="material-icons ">opacity</span>
          </Button>
          <Button
            className="flat-primary rounded-full px-3 font-semibold lg:text-base lg:px-5"
            action={() => {}}
          >
            + POST
          </Button>
        </div>
      </div>
    </div>
  );
}

interface IProps {
  image?: string;
  pic?: string;
  name: string;
  following: string;
  likes: string;
  posts: string;
}

ProfileBanner.propTypes = {
  image: PropTypes.string,
  pic: PropTypes.string,
  name: PropTypes.string,
  likes: PropTypes.string,
  following: PropTypes.string,
  posts: PropTypes.string,
};

export default ProfileBanner;
