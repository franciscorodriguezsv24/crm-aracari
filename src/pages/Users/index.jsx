
import React, { useState, useEffect } from 'react'
import NavBar from '../../components/NavBar'

const Users = () => {

    const [profiles, setProfiles] = useState(null);

    useEffect(() => {
        fetch('/db/users.json')
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setProfiles(data.users);
            })
            .catch(error => console.error('Error fetching data:', error));
        }, []);

        console.log(profiles)

        if (!profiles) return <div>Loading...</div>;
  return (
    <div>
        <NavBar/>
        <div className='p-3'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Address</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                    profiles.map(profile => (
                    <tr>
                        <th scope="row">{profile.id}</th>
                        <td>{profile.first_name}</td>
                        <td>{profile.email}</td>
                        <td>{profile.phone_number}</td>
                        <td>{profile.Address}</td>
                        <td className='d-flex flex-row gap-3'>
                            <button className='btn btn-warning text-light'>
                                Edit
                            </button>
                            <button className='btn btn-danger text-light'>
                                Delete
                            </button>
                        </td>
                    </tr>
                    ))
                }
                </tbody>
                <button className='btn btn-primary'>
                    Add new User
                </button>
            </table>
        </div>
    </div>
  )
}

export default Users
