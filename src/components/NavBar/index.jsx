import React from 'react'
import { useLocation, Link } from 'react-router-dom'

const NavBar = () => {
    const location = useLocation();
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand fs-2" to="/admin">Admin Board</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <Link className={location.pathname === '/users' ? 'btn d-flex flex-row text-success border-success align-items-center gap-2 fs-4' : 'btn d-flex flex-row text-success align-items-center gap-2 fs-4'} to="/users">
                        Users
                        </Link>
                        <Link className={location.pathname === '/tasks' ? 'btn d-flex flex-row text-success border-success align-items-center gap-2 fs-4' : 'btn d-flex flex-row text-success align-items-center gap-2 fs-4'} to="/tasks">
                        Tasks
                        </Link>
                        <Link className={location.pathname === '/calendar' ? 'btn d-flex flex-row text-success border-success align-items-center gap-2 fs-4' : 'btn d-flex flex-row text-success align-items-center gap-2 fs-4'} to="/calendar">
                        calendar
                        </Link>
                    </ul>
                </div>
            </div>
            <Link className='btn btn-danger text-light' to="/">Log out</Link>
        </nav>
    )
}

export default NavBar
