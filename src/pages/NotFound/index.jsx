import React from 'react'
import NavBar from '../../components/NavBar'

const NotFound = () => {
    return (
        <div>
            <NavBar/>
            <div className='d-flex flex-column w-100 vh-100 justify-content-center align-items-center fs4'>
                Error 404 Page Not Found :( 
            </div>
        </div>
    )
}

export default NotFound