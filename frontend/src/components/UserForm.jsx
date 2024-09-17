import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const UserForm = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [socialHandle, setSocialHandle] = useState('');
    const [images, setImages] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('socialHandle', socialHandle);
        for (let i = 0; i < images.length; i++) {
            formData.append('images', images[i]);
        }

        try {
            const res = await axios.post('http://localhost:3000/api/users/submit', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            console.log(res.data);
            alert('Form submitted successfully!');
            navigate("/admin");
        } catch (err) {
            console.error(err);
            alert('Form submission failed: Please attach images upto 10');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    placeholder='Enter your name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder='Enter Social Media Handle'
                    value={socialHandle}
                    onChange={(e) => setSocialHandle(e.target.value)}
                    required
                />
            </div>
            <div>
                <input
                    type="file"
                    multiple
                    onChange={(e) => setImages(e.target.files)}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default UserForm;
