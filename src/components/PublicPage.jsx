import { Message } from "./Message";
import { AppBar } from "./AppBar";

export const PublicPage = () => {
    return <>
        <AppBar/> 
        <Message text="Welcome to public page" />
    </>
}