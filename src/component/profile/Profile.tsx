import React from 'react'
import { Button } from '../../shared/component/Button'
import { changeTheme } from '../../shared/service/theme'

function Profile() {
    return (
        <div className='flex flex-col animate__animated animate__fadeIn animate__faster'>
            Profile
            <span>Normal</span>
            <Button action={() => changeTheme()}>Change theme</Button>
            <Button className='primary' action={() => changeTheme()}>Change theme</Button>
            <Button type='icon' className='default' action={() => changeTheme()}>
                <span className='material-icons'>home</span>
            </Button>
            <span>Stroked</span>
            <Button className='stroke-default' action={() => changeTheme()}>Change theme</Button>
            <Button className='stroke-primary' action={() => changeTheme()}>Change theme</Button>
            <Button type='icon' className='stroke-default' action={() => changeTheme()}>
                <span className='material-icons'>home</span>
            </Button>
            <span>Flat</span>
            <Button className='flat-primary' action={() => changeTheme()}>Change theme</Button>
            <Button type='icon' className='flat-primary' action={() => changeTheme()}>
                <span className='material-icons'>home</span>
            </Button>
        </div>
    )
}

export default Profile