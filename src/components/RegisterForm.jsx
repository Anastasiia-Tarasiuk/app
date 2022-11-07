import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { Message } from "./Message";
import { usersStorage } from "./userStorage";

export const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    
    function handleFormSubmit(e) {
        e.preventDefault();      

        if (!usersStorage.find(user => user.email === email)) {
            usersStorage.push({ name, email, password });
            localStorage.setItem('users', JSON.stringify(usersStorage));
            navigate("../login");
        }   
    }

    function handleInputChange(e) {
        const value = e.currentTarget.value;
        switch (e.currentTarget.name) {
            case "name":
                setName(value);
                break;
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
            <Link to="/"><Button type="button" text="Back"/></Link>
            <Message text="Please sing up" />
            <form onSubmit={handleFormSubmit}>
                <label>Name
                    <input type="text" name="name" onChange={handleInputChange} required/>
                </label>
                <label>Email
                    <input type="email" name="email" onChange={handleInputChange} required/>
                </label>
                <label>Password
                    <input type="password" name="password" onChange={handleInputChange} required/>
                </label>
                <Button className='registerButton' type="submit" text="Sign up"/>
            </form>
        </>
    )
}
