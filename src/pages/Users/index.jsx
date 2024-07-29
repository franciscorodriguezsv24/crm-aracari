
import React, { useState, useEffect } from 'react'
import NavBar from '../../components/NavBar'

const Users = () => {

    const [profiles, setProfiles] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [second, setSecond] = useState('');
    const [editing, setEditing] = useState(false);
    const [currentUserId, setCurrentUserId] = useState(null);

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

        const addProfile = () => {
            console.log('testing')
            const newProfile = {
                id: profiles.length + 1,
                first_name: name,
                last_name: second,
                email: email,
                phone_number: phone,
                Address: address
            }

            setProfiles([...profiles, newProfile]);
            setName('');
            setEmail('');
            setPhone('');
            setAddress('');
            setSecond('')
        }

        const editUser = (user) => {
            setEditing(true);
            setName(user.first_name);
            setEmail(user.email);
            setPhone(user.phone_number);
            setAddress(user.Address);
            setSecond('')
            setCurrentUserId(user.id);
        };

        const updateUser = () => {
            setProfiles(
                profiles.map((profile) =>
                profile.id === currentUserId ? { ...user, first_name:name, last_name: second, email: email, phone_number:phone, Address:address } : profile
            )
            );
            setName('');
            setEmail('');
            setPhone('');
            setAddress('');
            setSecond('');
            setEditing(false);
            setCurrentUserId(null);
        };

        const deleteUser = (id) => {
            setProfiles(profiles.filter((profile) => profile.id !== id));
        };

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
                    <tr key={profile.id}>
                        <th scope="row">{profile.id}</th>
                        <td>{profile.first_name}</td>
                        <td>{profile.email}</td>
                        <td>{profile.phone_number}</td>
                        <td>{profile.Address}</td>
                        <td className='d-flex flex-row gap-3'>
                            <button className='btn btn-warning text-light' type="button" data-bs-toggle="modal" data-bs-target="#editUser" onClick={() => editUser(profile)}>
                                Edit
                            </button>
                            <button className='btn btn-danger text-light' onClick={() => deleteUser(profile.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                    ))
                }
                </tbody>
            </table>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createUser">
                Add new User
            </button>

                <div className="modal fade" id="createUser" tabIndex="-1" aria-labelledby="createUserLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="createUserLabel">Add New User</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form className='row'>
                                    <div className="col-6">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  value={name} onChange={(e) => setName(e.target.value)}/>
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="exampleInputPassword1" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="exampleInputPassword1" className="form-label">phone number</label>
                                        <input type="text" className="form-control" id="exampleInputPassword1" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                                        <input type="text" className="form-control" id="exampleInputPassword1" value={address} onChange={(e) => setAddress(e.target.value)}/>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" onClick={(e) => {e.preventDefault(); addProfile();}} data-bs-dismiss="modal">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Edit modal */}

                <div className="modal fade" id="editUser" tabIndex="-1" aria-labelledby="editUserLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="editUserLabel">Edit User</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form className='row'>
                                    <div className="col-6">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  value={name} onChange={(e) => setName(e.target.value)}/>
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="exampleInputPassword1" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="exampleInputPassword1" className="form-label">phone number</label>
                                        <input type="text" className="form-control" id="exampleInputPassword1" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                                        <input type="text" className="form-control" id="exampleInputPassword1" value={address} onChange={(e) => setAddress(e.target.value)}/>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" onClick={(e) => {e.preventDefault(); updateUser();}} data-bs-dismiss="modal">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    )
}

export default Users
