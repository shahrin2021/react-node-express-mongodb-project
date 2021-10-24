import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateUser = () => {

    const {id} = useParams();
    // const [user, setUser] = useState({name: "" ,email: ""})
    const [user, setUser] = useState({})

    useEffect(()=>{
        const url = `http://localhost:5000/users/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUser(data))

    }, [])

    const handleNameChange= e=>{
        const updatedName= e.target.value;
        const updatedUser= {name: updatedName, email: user.email};
        setUser(updatedUser)
    };
    const handleEmailChange= e=>{
        const updatedEmail= e.target.value;
        // const updatedUser= {...user};
        // updatedUser.email= updatedEmail;
        const updatedUser= {name: user.name, email: updatedEmail}
        setUser(updatedUser)
    }

    const handleUpdateUser= (e)=>{
        const url = `http://localhost:5000/users/${id}`;
        fetch(url , {
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json()) 
        .then(data=>{
             if(data.modifiedCount > 0){
                 alert('updated successfully')
                 setUser({})
             }  
        })

        e.preventDefault()
    }
    return (
        <div>
            <h2>This is Update User</h2>
            <p>id {id}</p>
            <h1>{user.name}</h1>
            <h3>{user.email}</h3>

            <form action="" onSubmit={handleUpdateUser}>
            <p>id {id}</p>
                <input type="text" name="" id="" onChange={handleNameChange} value={user.name || ""} />
                <input type="email" name="" id="" onChange={handleEmailChange}  value={user.email || "" } />
                <input type="submit" value="update" />
            </form>
        </div>
    );
};

export default UpdateUser;