import React, { useState } from 'react';

const UserCard = (props) => {
    const [userName, setUsername] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [confirmPassword, setConfirmpassword] = useState(" ");

    const createUser = (e) => {

        e.preventDefault(); 

        const newUser = {
            userName,
            email,
            password,
            confirmPassword
        };
        setUsername("");
    	setEmail("");
    	setPassword("");

    };
    // console.log(userName);
    // console.log(email);
    // console.log(password);
    return (
        <form onSubmit={ createUser }> 
            <div>
                <label> Username: </label>
                <input type = "text" onChange={ (e) => setUsername(e.target.value)}/>
            </div>
            <div>
                <label> Email Address: </label>
                <input type = "text" onChange={ (e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label> Password: </label>
                <input type = "password" onChange={ (e) => setPassword(e.target.value)} />
            </div>
            <div>
                <label> Confirm Password: </label>
                <input type = "password" onChange={ (e) => setConfirmpassword(e.target.value)} />
            </div>
            {/* <input type = "submit" value="Create User" /> */}
            <h2> Your form data</h2>
            <div>
                <label>First Name <span>{ userName }</span></label>
            </div>
            <div>
                <label>Email <span>{ email }</span></label>
            </div>
            <div>
                <label>Password <span>{ password }</span></label>
            </div>
            <div>
                <label>Comfirm Password <span>{ confirmPassword }</span></label>
            </div>
        </form>
    );
};

export default UserCard;
