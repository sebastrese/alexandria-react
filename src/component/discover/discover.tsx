import React from 'react';

//Component
import { SearchBar } from '../../shared/component/Bar';
import { Banner } from '../../shared/component/Banner';
import { Card } from '../../shared/component/Card';

function Explore(){
    return(
        <div className='ml-8 mt-6 space-y-4'>
            <div className='font-black' style={{fontSize:'28px'}}>
                Explore
            </div>
            <div className='flex flex-col w-screen max-w-screen-lg space-y-4'>
                <SearchBar onHiddenHandler={()=>{}}/>
                <div className=' flex flex-row space-x-6 font-bold'>
                    <button className='rounded-full py-2 px-4 items-center bg-blue-600'>Trending</button>
                    <button className='rounded-full py-2 px-4 items-center border border-gray-800'>
                        Art
                    </button>
                    <button className='rounded-full py-2 px-4 items-center border border-gray-800'>
                        Math
                    </button>
                    <button className='rounded-full py-2 px-4 items-center border border-gray-800'>
                        Cinematography
                    </button>
                    <button className='rounded-full py-2 px-4 items-center border border-gray-800'>
                        Software
                    </button>
                </div>
            </div>
            <div className='grid grid-flow-row grid-cols-3'>
                <div className='w-2/3'>
                    <Banner heading='Heading Example' description='Description Example'/>
                </div>
                <div style={{fontFamily:'Lato', fontSize:'16px', fontWeight:'bold'}}>
                    <Card type='rounded' image='https://profiles.howard.edu/sites/profiles.howard.edu/files/yakubu.jpg' className='w-1/3'/>Gustavo Fring
                </div>
            </div>
        </div>
    )
}

export default Explore