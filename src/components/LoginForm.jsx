import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button"
import { Message } from "./Message";
    
export const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function handleFormSubmit(e) {
        e.preventDefault();

        JSON.parse(localStorage.getItem("users")).map(user => {
            if (user.email === email && user.password === password) {
                navigate("../main");
            }              
        })        
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
            <Link to="/"><Button type="button" text="Back"/></Link>
            <Message text="Please sing in" />
            <form onSubmit={handleFormSubmit}>
                <label>Email
                    <input type="email" name="email" onChange={handleInputChange} required/>
                </label>
                <label>Password
                    <input type="password" name="password" onChange={handleInputChange} required/>
                </label>
                <Button className='loginButton' type="submit" text="Sign in"/>
            </form>
        </>
    )
}