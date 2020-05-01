import React from 'react';
import { Helmet } from 'react-helmet';
import './Home.scss';

const TITLE = "Alexandria - Home"

export function HomeComponent() {
    return (
        <>
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <div className="flex w-full h-full justify-center">
                <div className="banner flex m-4 flex-col justify-end items-start w-full rounded-lg h-full lg:h-64">
                    <div className="background-mask rounded-lg w-full h-full flex flex-col justify-end items-start p-8">
                        <h1 className="text-3xl lg:text-4xl">Alexandria for everyone.</h1>
                        <span className="lg:text-xl">Explore. Learn. Share.</span>
                    </div>
                </div>
            </div>
        </>
    );
}