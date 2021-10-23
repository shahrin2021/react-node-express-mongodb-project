import React, { useRef } from 'react';

const AddUser = () => {
    const nameRef = useRef()
    const emailRef = useRef()

    const handleSubmit = e=>{

        const name= nameRef.current.value;
        const email= emailRef.current.value;
        const newUser= {name:name, email: email}
        fetch('http://localhost:5000/users', {
            method: "POST", 
            headers:{
                "content-Type":"application/json"
            },
            body:JSON.stringify(newUser)
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.insertedId){
             alert('successfully user added')
                e.current.value='';
            }
        })
        e.preventDefault()
    };

    return (
        <div>
            <h2>Please  Add User</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={nameRef} name="" id="" placeholder='name' />
                <input type="email" ref={emailRef}name="" id="" placeholder='email' />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddUser;