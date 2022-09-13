import React, { useState, useEffect } from "react";
import axios from "axios";
import {useHistory, useParams} from 'react-router-dom';

const EditUser = () => {
    let history = useHistory();
    const{id} = useParams();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    const { name, username, email, phone, website } = user;

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    };

    useEffect(() => {
        loaduser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
       //await axios.put(`http://localhost:4003/users/${id}`, user);
       await axios.put(`https://my-json-server.typicode.com/VPCitrous/users/users/${id}`, user);
       history.push("/");
    }

    const loaduser = async () => {
        //const result = await axios.get(`http://localhost:4003/users/${id}`);
        const result = await axios.get(`https://my-json-server.typicode.com/VPCitrous/users/users/${id}`);
        setUser(result.data);
    }

    return (
        <div>
            <h1>Edit User</h1>
            <div className="container">
                <div className="w-75 mx-auto shadow p-5">
                    <form onSubmit={e => onSubmit(e)}>
                        <div className="form-group">
                            <input type="text" id="name" className="form-control form-control-lg" placeholder="Enter Your Name" name="name" value={name} onChange={e => onInputChange(e)} />
                        </div>
                        <div className="form-group">
                            <input type="text" id="username" className="form-control form-control-lg" placeholder="Enter Your Username" name="username" value={username} onChange={e => onInputChange(e)} />
                        </div>
                        <div className="form-group">
                            <input type="text" id="email" className="form-control form-control-lg" placeholder="Enter Your E-mail Address" name="email" value={email} onChange={e => onInputChange(e)} />
                        </div>
                        <div className="form-group">
                            <input type="text" id="phone" className="form-control form-control-lg" placeholder="Enter Your Phone Number" name="phone" value={phone} onChange={e => onInputChange(e)} />
                        </div>
                        <div className="form-group">
                            <input type="text" id="website" className="form-control form-control-lg" placeholder="Enter Your Web Name" name="website" value={website} onChange={e => onInputChange(e)} />
                        </div>
                        <button type="submit" className="btn btn-secondary">Update User</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditUser;