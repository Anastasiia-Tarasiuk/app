import { Link } from "react-router-dom";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import { FormInput } from "../FormInput";
import { ButtonComponent } from "../Button";
import { Message } from "../Message/Message";
import Notiflix from "notiflix";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from '../../redux/slice/userSlice';
import {addVideo} from "../../redux/slice/videoSlice";
import bcrypt from 'bcryptjs';
import {Icon, BackButton} from "./RegisterForm.styled";
import {Container} from "../Container/Container";

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
            dispatch(addVideo({ loggedInUserId: id, videoName: "Default video", videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', videoId: 1678379051303}));
            navigate("../");
        }
    }

    return <Container>
            <Link to="/"><BackButton aria-label="Back to login page" type="button" text={<Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></Icon>}/></Link>
            <Message text="Please sing up" />
            <form onSubmit={handleFormSubmit}>
                <FormInput labelText="Name" inputType="text" inputName="name" onChange={value => setName(value)} controlId="nameId" aria-required="true"/>
                <FormInput labelText="Email" inputType="email" inputName="email" onChange={value => setEmail(value)} controlId="emailId" aria-required="true"/>
                <FormInput labelText="Password" inputType="password" inputName="password" onChange={value => setPassword(value)} controlId="passwordId" aria-required="true"/>
                <FormInput labelText="Repeat password" inputType="password" inputName="passwordCheck" onChange={value => passwordCheck = value} controlId="passwordCheckId" aria-required="true"/>
                <ButtonComponent className='singUpButton' type="submit" text="Sign up"/>
            </form>
        </Container>
}
