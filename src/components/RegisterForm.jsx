import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "./Button";



export const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    
    // const user = [] ;

    function handleFormSubmit(e) {
        e.preventDefault();

        const user = {name, email, password}
        // usersStorage.push({ name, email, password });


        localStorage.setItem('users', user )

        // resetForm();
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
        }
    }

    function resetForm() {
        name = '';
        email = '';
        password = '';
    }

    return (
        <>
            <Link to="/"><Button type="button" text="Back"/></Link>
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
                <Button type="submit" text="Sign up"/>
            </form>
        </>
    )
}
