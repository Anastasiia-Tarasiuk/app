import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Notiflix from "notiflix";
import { ButtonComponent } from "./Button"
import { Message } from "./Message";
import { FormInput } from "./FormInput";
import { useDispatch, useSelector } from "react-redux";
import { toggleLoggedInUser } from '../redux/slice/userSlice';
import bcrypt from 'bcryptjs';

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registeredUsers = useSelector((state) => state.users.allUsers);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    window.history.forward();

    function handleFormSubmit(e) {
        e.preventDefault();

        const currentUser = registeredUsers.find(user => user.email === email.trim());

        if (!!currentUser) {
            const isValidPassword = bcrypt.compareSync(password, currentUser.password);

            if (isValidPassword) {
                userLogin(currentUser);
            } else {
                Notiflix.Notify.failure('Email or password is wrong');
            }
        } else {
            Notiflix.Notify.failure('Email or password is wrong');
        }
    }

    function userLogin(loggedInUser) {
        dispatch(toggleLoggedInUser( loggedInUser ));
        navigate("../main");
    }

    return (
        <>
            {/*<Link to="/"><ButtonComponent type="button" text="Back"/></Link>*/}
            <Message text="Please sing in" />
            <form onSubmit={handleFormSubmit}>
                <FormInput labelText="Email" inputType="email" inputName="email" onChange={value => setEmail(value)} controlId="emailId" />
                <FormInput labelText="Password" inputType="password" inputName="password"  onChange={value => setPassword(value)} controlId="passwordId"/>
                <ButtonComponent className="singInButton" type="submit" text="Sign in"/>
            </form>
        </>
    )
}