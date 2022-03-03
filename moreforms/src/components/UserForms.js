import React, { useState} from 'react';

const UserForm = (props) => {
    // set and get user entered fields
    const [firstName, setFirstname] = useState("");
    const [nameError, setNameError] = useState(false);

    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState(false);

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);

    const [confirmPassword, setConfirmpassword] = useState("");
    const [confirmPasswordError, setConfirmpasswordError] = useState(false);

    const [hasBeenSubmitted,setHasBeenSubmitted] = useState(false);

    //handle events from user entered fields
    const handleFirstName = (e) => {
        setFirstname(e.target.value);
        console.log(firstName);
        console.log(e.target.value.length);
        if (e.target.value.length < 2) {
            setNameError(true);
        } else {
            setNameError(false);
        }
    };

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 2) {
            setLastNameError(true);
        } else {
            setLastNameError(false);
        }
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
        // console.log(e.target.value);
        // console.log(password);
        if(e.target.value.length < 8) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
    };

    const handleConfirmPassword = (e) => {
        setConfirmpassword(e.target.value);
        if(e.target.value !== password) {
            setConfirmpasswordError(true);
        } else {
            setConfirmpasswordError(false);
        }
    };


    const createUser = (e) => {
        e.preventDefault();

        const newUser = {
            firstName,
            lastName,
            email,
            confirmPassword,
            password
        };
        console.log("Welcome", newUser);
    	setFirstname("");
        setLastName("");
    	setEmail("");
    	setPassword("");
        setConfirmpassword("");

        setHasBeenSubmitted (true);
    };

    const formMessage = () => {
        if( hasBeenSubmitted ) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
        
    };

    return (
        <form onSubmit={ createUser }>
            <h3>{ formMessage() }</h3>
            <div>
                <label>First Name: </label>
                <input type="text" value={ firstName } onChange={ handleFirstName } />
                {
                    nameError ? <p className = 'errors'>First Name must be at least 2 characters</p> : ''
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" value={ lastName } onChange={ handleLastName} />
                {
                    lastNameError ? <p className = 'errors'>Last Name must be at least 2 characters</p> : ''
                }
            </div>
            <div>
                <label>Eamil Address: </label>
                <input type="text" value={ email } onChange={ handleEmail }/>
                {
                    emailError ? <p className = 'errors'>Email must be at least 5 characters</p> : ''
                }               
            </div>
            <div> 
                <label>Confirm Password: </label>
                <input type="password" value={ confirmPassword } onChange={ handleConfirmPassword }/>           
            </div>

            {
                passwordError ? <p className = 'errors'>Password must be at least 8 characters</p>: ''
            }  
            {
                confirmPasswordError ? <p className = 'errors'>Password must match</p> : ''
            }    
            <div>
                <label>Password: </label>
                <input type="password" value={ password } onChange={ handlePassword}/>      
            </div>
            {
                (nameError || lastNameError || passwordError || confirmPasswordError || emailError) ?
                <input type="submit" value="Create User" disabled/> :
                <input type="submit" value="Create User"/> 
            }
            {/* <input type="submit" value="Create User"/> */}
        </form>
    );


};

export default UserForm;