import React, { useState} from 'react';

const UserForm = (props) => {
    const [userName, setUsername] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();

        const newUser = {
            userName,
            email,
            password
        };
        console.log("Welcome", newUser);
    	setUsername("");
    	setEmail("");
    	setPassword("");

        setHasBeenSubmitted (true);
    };

    const formMessage = () => {
        if( hasBeenSubmitted) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    };
    return (
        <form onSubmit={ createUser }>
            <h3>{ formMessage() }</h3>
            <div>
                <label>Username: </label>
                <input type="text" value={ userName } onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Eamil Address: </label>
                <input type="text" value={ email } onChange={(e) => setEmail(e.target.value)}/>               
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={ password } onChange={(e) => setPassword(e.target.value)}/>               
            </div>
            <input type="submit" value="Create User"/>
        </form>
    );


};

export default UserForm;