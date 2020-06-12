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
import { ReactComponent as Blazing } from '../../assets/img/landing/blazing.svg';
import { ReactComponent as Trends } from '../../assets/img/landing/trends.svg';
import { ReactComponent as Docs } from '../../assets/img/landing/docs.svg';
import { ReactComponent as Amazon } from '../../assets/img/landing/amazon.svg';
import { ReactComponent as Google } from '../../assets/img/landing/google.svg';
import { ReactComponent as Spotify } from '../../assets/img/landing/spotify.svg';

export default function Landing() {
    return (
        <div className='landing w-full h-full'>
            {/** Navbar fixed */}
            <div className='landing flex flex-row items-center w-full p-4 lg:py-12 lg:px-20' style={{position: 'fixed'}}>
                <div className='flex flex-row items-center'>
                    <span className='h-12 w-12 rounded-full mr-3' id='logo' />
                    <a href='#home' className='font-black text-2xl brand-text'>Alexandria</a>
                </div>
                <div className='hidden flex-row flex-wrap items-center font-semibold lg:flex lg:mx-8 lg:text-lg'>
                    <a href='#why' className='mx-4'>Why</a>
                    <a href='#features' className='mx-4'>Features</a>
                    <a href='#powered' className='mx-4'>Powered</a>
                    <a href='#about' className='mx-4'>About</a>
                </div>
                <span className='flex-auto' />
                <Button type='icon' className='hidden md:flex md:mx-4 stroke-default p-2' action={() => changeTheme()}>
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
                        <div className='flex flex-col text-lg p-8 pt-4 pb-16 lg:w-3/12'>
                            <span id='heading-text' className='text-5xl font-black break-words whitespace-pre brand-text md:text-6xl'>
                                Knowledge <br/>
                                for <br/>
                                everyone
                            </span>
                            <span className='my-6 text-xl font-medium leading-loose break-words'>
                                <b className='font-black'>Alexandria</b> is an streaming platform where you can
                                share knowledge through media you like.
                            </span>
                            <Button className='flat-primary rounded-full px-3 font-semibold text-base lg:px-5' action={() => {}}>
                                <a href='#why' className='flex items-center'>
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
            <div role='main' className='flex flex-col justify-center items-center w-full m-0'>

                {/** Why */}
                <section id='why' className='flex flex-col md:flex-row flex-wrap w-full items-center justify-evenly text-white bg-indigo p-8 pb-20'>
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

                    <WhyAlexa className='w-full h-auto md:w-1/2 lg:w-3/12' />
                </section>

                {/** Features */}
                <section id='features' className='landing flex flex-col w-full items-center pt-24'>
                    <span className='text-brand font-black text-5xl'>Features</span>
                    <span className='w-24 mt-4 mb-16' style={{border: '2px solid', borderColor: 'var(--color-font)'}} />
                    <div className='flex flex-col w-full lg:flex-row lg:flex-wrap'>
                        <div className='flex flex-col md:flex-row  w-full justify-center items-center p-8 lg:w-1/2 lg:flex-row lg:flex-wrap' 
                        style={{backgroundColor: 'var(--color-accent)', color: '#E91E63'}}>
                            <Blazing className='w-10/12 my-8 h-auto md:w-1/2 lg:w-5/12 md:mr-4' />
                            <div className='flex flex-col pb-8 lg:w-1/2'>
                                <span className='text-3xl text-brand font-extrabold'><b>Blazingly Fast</b></span>
                                <span className='w-10 mb-5' style={{border: '2px solid', borderColor: '#E91E63'}} />
                                <p className='text-xl mb-8'>
                                    <b className='font-extrabold'>Search speed,</b> our platform is made to perform advanced searches quickly so you can enjoy your 
                                    content faster.
                                </p>
                                <p className='text-lg'>
                                    <i>Powered by <b className='font-extrabold'>Alexandria Neutrino.</b></i>
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row w-full justify-center items-center p-8 lg:w-1/2 lg:flex-row lg:flex-wrap' 
                        style={{backgroundColor: '#283593', color: '#F8BBD0'}}>
                            <Trends className='w-10/12 my-8 h-auto md:w-1/2 lg:w-5/12 md:mr-4' />
                            <div className='flex flex-col pb-8 lg:w-1/2'>
                                <span className='text-3xl text-brand font-extrabold'><b>Trends</b></span>
                                <span className='w-10 mb-5' style={{border: '2px solid', borderColor: '#F8BBD0'}} />
                                <p className='text-xl mb-8'>
                                    <b className='font-extrabold'>Get the latest topic,</b> our platform brings you the possibility to look at the newer things 
                                    happening around you.
                                </p>
                                <p className='text-lg'>
                                    <i>#AlexandriaIsAwesome</i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row justify-center items-center w-full text-white p-8' style={{backgroundColor: '#006064'}}>
                        <Docs className='w-10/12 my-8 h-auto md:w-1/2 lg:w-2/12 md:mr-8' />
                        <div className='flex flex-col pb-8 lg:w-1/2'>
                            <span className='text-3xl text-brand font-extrabold'><b>Versatile</b></span>
                            <span className='w-10 mb-5' style={{border: '2px solid white'}} />
                            <p className='text-xl mb-8'>
                                <b className='font-extrabold'>Don’t get stuck,</b> our platform offers new ways to get inside the digital age.
                            </p>
                            <p className='text-lg'>
                                <i>From paper to Alexandria.</i>
                            </p>
                        </div>
                    </div>
                </section>

                {/** Powered */}
                <section id='powered' className='landing flex flex-col w-full items-center pt-24 pb-24' style={{color: '#e0e0e0'}}>
                    <span className='text-brand font-black text-5xl'>Powered</span>
                    <span className='w-24 mt-4 mb-8' style={{border: '2px solid', borderColor: '#e0e0e0'}} />
                    <div className='flex flex-row flex-wrap w-full justify-center items-center px-16'>
                        <Amazon className='w-9/12 h-auto md:w-3/12 lg:w-1/6' />
                        <Google className='w-9/12 h-auto my-8 md:py-0 md:mx-8 md:w-3/12 lg:w-1/6' />
                        <Spotify className='w-9/12 h-auto md:w-3/12 lg:w-1/6' />
                    </div>
                </section>

                {/** Footer */}
                <section id='about' className='footer flex flex-col w-full'>
                    <div className='flex flex-col flex-wrap px-16 py-12 w-full lg:px-32'>
                        <div className='flex flex-row items-center'>
                            <span className='h-12 w-12 rounded-full mr-3' id='logo' />
                            <a href='#home' className='font-black text-2xl brand-text'>Alexandria</a>
                        </div>

                        <div className='flex flex-row flex-wrap'>
                            <div className='flex flex-row my-8 mr-8 lg:mr-16'>
                                <div>
                                    <span className='text-brand text-xl'><b className='font-extrabold'>Explore</b></span>
                                    <ul className='text-lg'>
                                        <li className='mt-4'><a href='#home'>Home</a></li>
                                        <li className='my-2'><a href='#why'>Why</a></li>
                                        <li><a href='#features'>Features</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className='flex flex-row my-8 md:mr-8 lg:mr-16'>
                                <div>
                                    <span className='text-brand text-xl'><b className='font-extrabold'>Get Involved</b></span>
                                    <ul className='text-lg'>
                                        <li className='mt-4'><Link to='/donations'>Donate</Link></li>
                                        <li className='my-2'><a href='mailto:jobs@damascus-engineering.com?subject=Alexandria%20job%20application'>Careers</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className='flex flex-row my-8 mr-8 lg:mr-16'>
                                <div>
                                    <span className='text-brand text-xl'><b className='font-extrabold'>Social</b></span>
                                    <ul className='flex flex-row flex-wrap text-lg'>
                                        <li className='mr-4'>
                                            <a href='https://facebook.com/alexandria-project'>
                                                <span className='mdi mdi-facebook text-4xl' />
                                            </a>
                                        </li>
                                        <li className='mr-4'>
                                            <a href='https://twitter.com/alexandria-project'>
                                                <span className='mdi mdi-twitter text-4xl' />
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://instagram.com/alexandria-project'>
                                                <span className='mdi mdi-instagram text-4xl' />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <span className='hidden md:flex md:flex-auto' />

                            <div className='flex flex-row my-8 mr-8 lg:mr-16'>
                                <div>
                                    <span className='text-brand text-xl'><b className='font-extrabold'>Contact</b></span>
                                    <ul className='flex flex-row flex-wrap text-lg'>
                                        <li className='mr-4'>
                                            <a href='mailto:contact@damascus-engineering.com'>
                                                <span className='mdi mdi-email text-4xl' />
                                            </a>
                                        </li>
                                        <li className='mr-4'>
                                            <a href='tel:+018005890000'>
                                                <span className='mdi mdi-phone text-4xl' />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className='flex flex-row my-8'>
                                <div>
                                    <span className='text-brand text-xl'><b className='font-extrabold'>More</b></span>
                                    <ul className='flex flex-row flex-wrap items-center text-lg'>
                                        <li className='mr-4'>
                                            <Link to='/country' className='flex flex-row items-center'>
                                                <span className='mdi mdi-earth text-4xl mr-1' />
                                                <span className='font-black text-sm'>US</span>
                                            </Link>
                                        </li>
                                        <li className='mr-4'>
                                        <Button type='icon' className='flex mx-4 stroke-default p-2 md:hidden' action={() => changeTheme()}>
                                            <span className='material-icons'>brightness_4</span>
                                        </Button>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='flex flex-col flex-wrap text-center w-full px-16 py-10 bg-indigo md:flex-row lg:px-32'>
                        <span><b className='font-black'>The Alexandria Foundation</b> © 2020 · All rights reserved</span>
                        <span className='flex-auto' />
                        <Link className='my-4 md:my-0 md:mx-8' to='/privacy'>Privacy Policy</Link>
                        <Link to='/services'>Terms of Service</Link>
                    </div>
                </section>
            </div>
        </div>
    )
}