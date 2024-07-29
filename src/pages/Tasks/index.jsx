import React, { useState, useEffect } from 'react'
import NavBar from '../../components/NavBar'

const Tasks = () => {
    const [tasks, setTasks] = useState(null)
    useEffect(() => {
        fetch('/db/tasks.json')
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setTasks(data.tasks);
            })
            .catch(error => console.error('Error fetching data:', error));
        }, []);

        if (!tasks) return <div>Loading...</div>;


    return (
        <div>
            <NavBar/>
            <div className='p-3'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Client</th>
                            <th scope="col">Assigned To</th>
                            <th scope="col">Status</th>
                            <th scope="col">Activity Date</th>
                            <th scope='col'>Activity Reason</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        tasks.map(task => (
                        <tr key={task.id}>
                        <td>{task.client}</td>
                        <td>{task.assigned_to}</td>
                        <td>
                            <select className='form-control'>
                                <option selected>{task.status}</option>
                                <option  className='text-danger bg-danger' value="1">Not Started</option>
                                <option value="2" className='text-warning'>In Progress</option>
                                <option value="3" className='text-success'>Completed</option>
                            </select>
                        </td>
                        <td>{task.activity_date}</td>
                        <td>{task.activity_reason}</td>
                        </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Tasks 