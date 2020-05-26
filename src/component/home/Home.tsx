import React from 'react'
import { APPLICATION_NAME } from '../../core/config';

// Styles
import './Home.scss'

// Component
import { Banner } from '../../shared/component/Banner';
import { Helmet } from 'react-helmet';

function Home() {
    return (
        <>
            <Helmet>
                <title>{APPLICATION_NAME + ' - Home'}</title>
                <meta name='description' content={APPLICATION_NAME + ' Home'}/>
            </Helmet>
            <div className='viewport items-center animate__animated animate__fadeIn animate__faster 
            lg:py-4 lg:px-8'>
                <div className='safezone w-full h-full lg:max-w-screen-xl'>
                    <Banner heading={'Introducing '+APPLICATION_NAME} 
                    description='Share your knowledge with digital media you like.' />
                </div>
            </div>
        </>
    )
}

export default Home