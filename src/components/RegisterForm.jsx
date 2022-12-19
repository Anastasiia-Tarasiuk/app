import { Link } from "react-router-dom";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import { FormInput } from "./FormInput";
import { ButtonComponent } from "./Button";
import { Message } from "./Message";
import Notiflix from "notiflix";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from '../redux/slice/userSlice';
import bcrypt from 'bcryptjs';

let passwordCheck = null;

export const RegisterForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registeredUsers = useSelector((state) => state.users.allUsers);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleFormSubmit(e) {
        e.preventDefault();

        if (passwordCheck !== password) {
            Notiflix.Notify.failure('Password doesn\'t match' );
            return;
        }

        const existedUser = registeredUsers.find(user => user.email === email.trim());

        if (existedUser) {
            Notiflix.Notify.failure('User exists');
        } else {
            const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(6));
            const id = Math.random().toString(36).slice(-6);
            dispatch(addUser({ id, name, email: email.trim(), password: hashedPassword }));
            navigate("../login");
        }
    }

    return (
        <>
            <Link to="/"><ButtonComponent type="button" text="Back"/></Link>
            <Message text="Please sing up" />
            <form onSubmit={handleFormSubmit}>
                <FormInput labelText="Name" inputType="text" inputName="name" onChange={value => setName(value)} controlId="nameId"/>
                <FormInput labelText="Email" inputType="email" inputName="email" onChange={value => setEmail(value)} controlId="emailId"/>
                <FormInput labelText="Password" inputType="password" inputName="password" onChange={value => setPassword(value)} controlId="passwordId"/>
                <FormInput labelText="Repeat password" inputType="password" inputName="passwordCheck" onChange={value => passwordCheck = value} controlId="passwordCheckId"/>
                <ButtonComponent className='singUpButton' type="submit" text="Sign up"/>
            </form>
        </>
    )
}
