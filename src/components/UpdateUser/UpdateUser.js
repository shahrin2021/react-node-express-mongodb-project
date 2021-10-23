import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateUser = () => {

    const {id} = useParams();
    const [user, setUser] = useState({})

    useEffect(()=>{
        const url = `http://localhost:5000/users/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUser(data))

    }, [])
    return (
        <div>
            <h2>This is Update User</h2>
            <p>id {id}</p>
            <h1>{user.name}</h1>
        </div>
    );
};

export default UpdateUser;