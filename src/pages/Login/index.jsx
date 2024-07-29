import React from 'react';
import { FaCircleUser } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()

    const handleButton = () => {
        navigate('/admin')
    }
    return (
        <div className='w-100 vh-100 d-flex flex-row'>
            <div className='w-100 d-flex flex-column justify-content-center align-items-center gap-3'>
                <FaCircleUser size={200}/>
                <form className='col-12 col-md-6 col-lg-3 p-4 rounded' style={{backgroundColor: '#a5a5a5'}}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <button type="submit" className="btn btn-success" onClick={handleButton}>Log In</button>
                </form>
            </div>
        </div>
    )
}

export default Login