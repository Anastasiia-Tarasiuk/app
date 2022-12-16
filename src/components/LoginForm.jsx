import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Notiflix from "notiflix";
import { ButtonComponent } from "./Button"
import { Message } from "./Message";
import { FormInput } from "./FormInput";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedInUser } from '../redux/slice/userSlice';
    
export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registeredUser = useSelector((state) => state.users.allUsers);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    window.history.forward();

    function handleFormSubmit(e) {
        e.preventDefault();
        let loggedInUser = null;

        registeredUser.forEach(user => {
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
        dispatch(setLoggedInUser( loggedInUser ));
        navigate("../main");
    }

    return (
        <>
            <Link to="/"><ButtonComponent type="button" text="Back"/></Link>
            <Message text="Please sing in" />
            <form onSubmit={handleFormSubmit}>
                <FormInput labelText="Email" inputType="email" inputName="email" onChange={value => setEmail(value)} controlId="emailId" />
                <FormInput labelText="Password" inputType="password" inputName="password"  onChange={value => setPassword(value)} controlId="passwordId"/>
                <ButtonComponent className="singInButton" type="submit" text="Sign in"/>
            </form>
        </>
    )
}