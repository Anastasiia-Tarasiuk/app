import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ButtonComponent } from "./Button"
import { Message } from "./Message";
import { FormInput } from "./FormInput";
import Notiflix from "notiflix";
    
export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function handleFormSubmit(e) {
        e.preventDefault();
        let loggedInUser = null;
        const savedUsers =  JSON.parse(localStorage.getItem('users'));
        savedUsers.map(user => {
            if (user.email === email && user.password === password) {
                loggedInUser = user;               
            }
        });
        
        if (loggedInUser) {
            userLogin(loggedInUser)
        }  else {
            Notiflix.Notify.failure('Email or password is wrong');
        }           
    }

    function userLogin(loggedInUser) {
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
        navigate("../main");
    }

    function handleInputChange(e) {
        const value = e.currentTarget.value;
        switch (e.currentTarget.name) {
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            default: return;
        }
    }

    return (
        <>
            <Link to="/"><ButtonComponent type="button" text="Back"/></Link>
            <Message text="Please sing in" />
            <form onSubmit={handleFormSubmit}>
                <FormInput labelText="Email" inputType="email" inputName="email" onChange={handleInputChange} controlId="emailId" />
                <FormInput labelText="Password" inputType="password" inputName="password"  onChange={handleInputChange} controlId="passwordId"/>
                <ButtonComponent className="singInButton" type="submit" text="Sign in"/>
            </form>
        </>
    )
}