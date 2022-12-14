import React, { useState } from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom';

const AddUser = () => {
    let history = useHistory();

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
    }

    const onSubmit = async e => {
        e.preventDefault();
       //await axios.post("http://localhost:4003/users", user);
       await axios.post("https://my-json-server.typicode.com/VPCitrous/users/users", user);
       history.push("/");
    }

    return (
        <div>
            <h1>Add User</h1>
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
                        <button type="submit" className="btn btn-primary">Add User</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddUser;