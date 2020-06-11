import React from 'react';
import { Link } from 'react-router-dom';

// Hooks/Actions
import { changeTheme } from '../../shared/service/theme';

// Styles
import './Landing.scss';

// Components
import { Button } from '../../shared/component/Button';
import { ReactComponent as MainPicture } from '../../assets/img/landing/header.svg';
import { ReactComponent as WhyAlexa } from '../../assets/img/landing/whyalexa.svg';

export default function Landing() {
    return (
        <div className='landing w-full h-full'>
            {/** Navbar fixed */}
            <div className='landing flex flex-row items-center w-full p-4 lg:py-12 lg:px-20' style={{position: 'fixed'}}>
                <div className='flex flex-row items-center'>
                    <span className='h-12 w-12 rounded-full bg-gray-400 mr-3' />
                    <a href='#' className='font-black text-2xl brand-text'>Alexandria</a>
                </div>
                <div className='hidden flex-row flex-wrap items-center font-semibold lg:flex lg:mx-8 lg:text-lg'>
                    <a href='#whyus' className='mx-4'>Why</a>
                    <a href='#features' className='mx-4'>Features</a>
                    <a href='#powered' className='mx-4'>Powered</a>
                    <a href='#about' className='mx-4'>About</a>
                </div>
                <span className='flex-auto' />
                <Button type='icon' className='hidden lg:flex lg:mx-4 stroke-default p-2' action={() => changeTheme()}>
                    <span className='material-icons'>brightness_4</span>
                </Button>
                <Link to='/' className='flex items-center'>
                    <Button className='flat-primary rounded-full px-3 font-semibold lg:text-base lg:px-5' action={() => {}}>
                        Start Now    
                    </Button>
                </Link>
            </div>


            {/** Main canvas */}
            <div className='flex flex-col w-full md:h-auto lg:h-full'>
                <span className='flex-auto md:hidden' />
                <div className='w-full max-w-full h-auto lg:h-full'>
                    {/** Main title */}
                    <section id='home' className='flex flex-row items-center justify-center h-full w-full max-w-full 
                    flex-wrap-reverse pt-20 lg:flex-row md:pt-32'>
                        <div className='flex flex-col self- text-lg p-8 pt-4 pb-20 lg:w-3/12'>
                            <span className='text-5xl font-black break-words whitespace-pre brand-text lg:text-6xl'>
                                Knowledge <br/>
                                for <br/>
                                everyone
                            </span>
                            <span className='my-6 text-xl leading-loose break-words'>
                                <b>Alexandria</b> is an streaming platform where you can
                                share knowledge through media you like.
                            </span>
                            <Button className='flat-primary rounded-full px-3 font-semibold lg:text-base lg:px-5' action={() => {}}>
                                <a href='#whyus' className='flex items-center'>
                                    Learn More
                                </a>
                            </Button>
                        </div>
                        <MainPicture className='hidden w-full h-auto lg:w-7/12 lg:flex' />
                    </section>
                </div>
                <span className='w-full h-16 bg-indigo' />
            </div>
            {/** Main container */}
            <div role='main' className='flex flex-col justify-center items-center w-full m-0 text-white'>
                {/** Why Alexandria */}
                <section id='whyus' className='flex flex-row flex-wrap w-full items-center justify-evenly bg-indigo p-8'>
                    <div className='flex flex-col lg:w-5/12'>
                        <span className='text-5xl font-extrabold brand-text'>Why Alexandria</span>
                        <span className='w-32 mt-4 mb-16' style={{border: '2px solid white'}} />
                        <p className='text-xl leading-relaxed'>
                            <b className='font-extrabold'>Based on the antique Great Alexandria library,</b> our platform
                            focuses on being a worldwide knowledge hub for 
                            many interesting topics.
                        </p>
                        <p className='text-xl leading-relaxed my-4'>
                            We encourage everyone to share their knowledge so we
                            can live better as a society.
                        </p>
                        <p className='text-xl leading-relaxed my-4'>
                            <i>#FreeKnowledge</i>
                        </p>
                    </div>

                    <WhyAlexa className='w-full h-auto md:w-6/12 lg:w-3/12' />
                </section>
            </div>
        </div>
    )
}