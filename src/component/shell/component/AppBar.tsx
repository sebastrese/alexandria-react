import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

// Services
import { PLATFORM_NAME, APPLICATION_SHORT_NAME, APPLICATION_VERSION } from '../../../core/config';
import { changeTheme } from '../../../shared/service/theme';

// Component dependecies
import { Button } from '../../../shared/component/Button';
import { Item } from '../../../shared/component/Item';
import { SearchBar } from '../../../shared/component/Bar';

/**
 * AppBarDesktop exports a app bar for desktop devices.
 * _*Requires Hooks to operate_
 * @param {boolean} props.isMobile Value to either render or destroy the component's DOM
 */
export function AppBarDesktop(props: IDesktopProps) {
    const matchEvents = useRouteMatch({
        path: '/events',
        exact: true,
    })

    const matchAPI = useRouteMatch({
        path: '/api',
        exact: true,
    })

    const matchMetrics = useRouteMatch({
        path: '/metrics',
        exact: true,
    })
    
    if (!props.isMobile) {
        
        const customBorderRadius = '24px'

        return (
            <div className='appbar desktop hidden flex-col items-center p-8 shadow-2xl h-full
                overflow-y-auto lg:flex' style={{borderTopRightRadius:customBorderRadius, borderBottomRightRadius:customBorderRadius, 
                width:'248px'}}>
                
                {/** Application name */}
                <div className='flex flex-col my-4'>
                    <Link to='/' className='self-center flex flex-col items-center'>
                        <span className='icon text-4xl'>local_library</span>
                        <h1 className='font-bold text-3xl'>{PLATFORM_NAME}</h1>
                    </Link>
                </div>

                {/** Search input */}
                <SearchBar onHiddenHandler={()=>{}} />

                {/** Appbar list */}
                <div className='flex flex-col my-4 w-full h-full'>
                    
                    {/** My Libraries */}
                    <div className='flex flex-col my-3'>
                        <strong className='uppercase text-xs tracking-wider mb-2'>My libraries</strong>
                        <Link to='/events' className={matchEvents ? 'list-item active': 'list-item'}>
                            <span className='mdi mdi-heart text-xl mr-2' />
                            <span>Favorites</span>
                        </Link>
                    </div>

                    {/** HTTP API */}
                    <div className='flex flex-col my-3'>
                        <strong className='uppercase text-sm tracking-wider mb-2'>HTTP API</strong>
                        <Link to='/api' className={matchAPI ? 'list-item active': 'list-item'}>
                            <span className='mdi mdi-api text-xl mr-1' />
                            <span>API Status</span>
                        </Link>
                        <Link to='/metrics' className={matchMetrics ? 'list-item active': 'list-item'}>
                            <span className='mdi mdi-gauge text-xl mr-1' />
                            <span>Metric</span>
                        </Link>
                    </div>

                    {/** RPC API */}
                    <div className='flex flex-col my-3'>
                        <strong className='uppercase text-sm tracking-wider mb-2'>RPC API</strong>
                        <Item action={()=>{}}>
                            <span className='mdi mdi-api text-xl mr-1' />
                            <span>API Status</span>
                        </Item>
                        <Item className='mb-1' action={()=>{}}>
                            <span className='mdi mdi-gauge text-xl mr-1' />
                            <span>Metric</span>
                        </Item>
                    </div>

                    <span className='flex-grow' />

                    {/** System Footer */}
                    <div className='flex flex-col my-3 self-center'>
                        <div className='self-center'>
                            <Button type='icon' action={() => changeTheme()}>
                                <span className='icon'>account_circle</span>
                            </Button>
                        </div>
                        <div className='break-words mt-4 text-center'>
                            <span className='text-sm font-medium text-gray-700'>{PLATFORM_NAME} &copy; 2020 · {APPLICATION_SHORT_NAME} Version {APPLICATION_VERSION}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return null
}

interface IDesktopProps {
    isMobile: boolean
}

AppBarDesktop.propTypes = {
    isMobile: PropTypes.bool
}

/**
 * AppBarMobile exports a app bar for mobile devices.
 * _*Requires Hooks to operate_
 * @param {boolean} props.isMobile Value to either render or destroy the component's DOM
 * @param {function} props.toggleSearchHandler Parent's hook state handler
 */
export function AppBarMobile(props: IMobileProps) {
    if (props.isMobile) {
        return (
            <div className='appbar mobile flex flex-row justify-center items-center p-1 my-8 rounded-full z-10 fixed bottom-0 self-center max-w-screen-sm
                shadow-2xl  lg:hidden'>
                <Button type='icon' action={() => changeTheme()}>
                    <span className='icon'>dashboard</span>
                </Button>
                <Button type='icon' action={props.toggleSearchHandler}>
                    <span className='icon'>search</span>
                </Button>
                <Button type='icon' action={()=>{}}>
                    <span className='mdi mdi-server-network' />
                </Button>
                <Button type='icon' action={()=>{}}>
                    <span className='mdi mdi-api' />
                </Button>
                <Button type='icon' action={() => changeTheme()}>
                    <span className='icon'>account_circle</span>
                </Button>
            </div>
        )
    }
    
    return null
}

interface IMobileProps {
    isMobile: boolean
    toggleSearchHandler: ()=>void
}

AppBarMobile.propTypes = {
    isMobile: PropTypes.bool,
    toggleSearchHandler: PropTypes.func
}