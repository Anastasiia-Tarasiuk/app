import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button"
// import { usersStorage } from "./RegisterForm";
    
export const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function handleFormSubmit(e) {
        e.preventDefault();

        JSON.parse(localStorage.getItem("users")).map(user => {
             if (user.email === email && user.password === password) {
                    console.log('Access');
                    // resetForm();

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
        }
    }

    function resetForm() {
        email = '';
        password = '';
    }

    return (
        <>
            <Link to="/"><Button type="button" text="Back"/></Link>
            <form onSubmit={handleFormSubmit}>
                <label>Email
                    <input type="email" name="email" onChange={handleInputChange} required/>
                </label>
                <label>Password
                    <input type="password" name="password" onChange={handleInputChange} required/>
                </label>
                <Button class='loginButton' type="submit" text="Sign in"/>
            </form>
        </>
    )
}