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
            <div className='viewport items-center lg:p-8'>
                <div className='safezone w-full h-full lg:max-w-screen-xl'>
                    <div>
                        <h1 className='font-bold pb-2 text-3xl lg:hidden'>Alexandria</h1>
                    </div>
                    <Banner heading={'Introducing '+APPLICATION_NAME} 
                    description='Read, watch or listen.' />
                </div>
            </div>
        </>
    )
}

export default Home