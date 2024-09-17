import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get('http://localhost:3000/api/users/submissions');
                setUsers(res.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className='admin'>
            <h1>Admin Dashboard</h1>
            {users.map((user) => (
                <div className='admin-items' key={user._id}>
                    <h3>{user.name}</h3>
                    <p>{user.socialHandle}</p>
                    <div>
                        {user.images.map((img, index) => (
                            <img
                                key={index}
                                src={`http://localhost:3000${img}`} // Correct image path
                                alt={`Uploaded image ${index + 1}`}
                                style={{ width: '100px', marginRight: '10px' }}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AdminDashboard;
