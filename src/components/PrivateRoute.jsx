import { Navigate } from "react-router-dom";
import { usersStorage } from "./userStorage";

export default function PrivateRoute({ children, ...routeProps }) {
    
    let isLoggedIn = null;

    usersStorage.map(user => {
        if (user.isLoggedIn) {
            isLoggedIn = user.isLoggedIn;
        }
    })
    return isLoggedIn ? children : <Navigate to="/login" />

}