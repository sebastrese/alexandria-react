import React from "react";
import PropTypes from "prop-types";
//Style
import "./Notification.scss";
// Component dependecies
import { Card } from "../../../shared/component/Card";

/**
 * @param {string} props.image Background image URL
 * @param {string} props.uname User name
 * @param {string} props.description Description text
 * @param {string} props.className Extra CSS classes
 */
/*
<div className='safezone w-full h-full lg:max-w-screen-xl'>
                    <Banner heading={'Introducing '+APPLICATION_NAME} 
                    description='Share your knowledge with digital media you like.' />
                </div>
*/

function Notification(props: IProps) {
  return (
    <>
      <Card className="banner w-full text-white">
        <div className="bg-mask rounded-lg flex flex-col w-full h-full">
          <span className="flex-grow" />
          <div className="flex flex-row items-center pl-8">
            <img
              src={props.image}
              className="rounded-full w-24 h-24 shadow-lg"
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
}

Notification.propTypes = {
  image: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
};

export default Notification;
