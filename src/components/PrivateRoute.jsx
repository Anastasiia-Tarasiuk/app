import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
    const isLoggedIn = !!JSON.parse(localStorage.getItem('loggedInUser'))

    return isLoggedIn ? children : <Navigate to="/login" />

}