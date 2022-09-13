import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory, useParams } from 'react-router-dom';

const Users = () => {

    let history = useHistory();
    const { id } = useParams();


    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    useEffect(() => {
        loaduser();
    }, []);

    const loaduser = async () => {
        const result = await axios.get(`http://localhost:4003/users/${id}`);
        setUser(result.data);
    }

    return (
        <div className="container">
            <h1>Selected User details</h1>
            <hr/>
            <ul className="list-group w-50">
                <li className="list-group-item">name: {user.id}</li>
                <li className="list-group-item">email: {user.email}</li>
                <li className="list-group-item">phone: {user.phone}</li>
                <li className="list-group-item">website: {user.website}</li>
                <li className="list-group-item">username: {user.username}</li>
            </ul>
            
            <Link className="btn btn-primary" to={"/"}>Back To Home</Link>
        </div>
    );
};

export default Users;