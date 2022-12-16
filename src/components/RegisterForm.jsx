import { Link } from "react-router-dom";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import { FormInput } from "./FormInput";
import { ButtonComponent } from "./Button";
import { Message } from "./Message";
import Notiflix from "notiflix";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from '../redux/slice/userSlice';

export const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registeredUser = useSelector((state) => state.users.allUsers);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    function handleFormSubmit(e) {
        e.preventDefault();
        
        const existedUser = registeredUser.find(user => user.email === email);

        if (existedUser && existedUser?.email === email) {
            Notiflix.Notify.failure('User exists');
        } else {
            dispatch(addUser({ name, email, password }));
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
                <FormInput labelText="Password" inputType="password" inputName="password" onChange={value => setPassword(value)} controlId="passwordlId"/>
                <ButtonComponent className='singUpButton' type="submit" text="Sign up"/>
            </form>
        </>
    )
}
