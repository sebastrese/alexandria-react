import React from 'react'
import { Button } from '../../shared/component/Button'
import { changeTheme } from '../../shared/service/theme'

function Profile() {
    return (
        <div className='flex flex-col animate__animated animate__fadeIn animate__faster'>
            Profile
            <Button className='primary' action={() => changeTheme()}>Change theme</Button>
        </div>
    )
}

export default Profile