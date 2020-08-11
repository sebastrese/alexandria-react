import React from "react";
import PropTypes from "prop-types";
//Style
import "./Notification.scss";

// Component dependecies
import { Card } from "../../../shared/component/Card";
import { Link } from "react-router-dom";
import { ReactComponent as Placeholder } from "../../../assets/img/Placeholder_img.svg";

/**
 * @param {string} props.image Background image URL
 * @param {string} props.uname User name
 * @param {string} props.content Content link
 * @param {string} props.description Description text
 * @param {string} props.className Extra CSS classes
 */
/*
 */

function Notification(props: IProps) {
  return (
    <>
      <Link to={props.content}>
        <Card className=" text-white">
          <div className="bg-mask rounded-lg flex flex-col w-full ">
            <span className="flex-grow" />
            <div className="flex flex-row items-center pl-8">
              <img
                src={props.image}
                className="rounded-full w-24 h-24 shadow-lg object-cover"
              />
              <div className="flex flex-col p-8">
                <span className="text-3xl font-bold mb-1 lg:text-4xl">
                  {props.heading}
                </span>
                <span className="text-md lg:text-lg">{props.description}</span>
              </div>
            </div>
          </div>
        </Card>
      </Link>
      <div
        className="viewport items-center animate__animated animate__fadeIn animate__faster 
    lg:py-4 lg:px-8"
      ></div>
    </>
  );
}

interface IProps {
  image?: string;
  heading: string;
  description: string;
  className?: string;
  content: string;
}

Notification.propTypes = {
  image: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.string,
  className: PropTypes.string,
};

export default Notification;
