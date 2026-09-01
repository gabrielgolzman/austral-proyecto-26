import { useState } from "react"
import { AuthenticationContext } from "./AuthenticationContext"
import { isTokenValid } from "../../../helpers";

const tokenValue = localStorage.getItem("book-champions-token");

const AuthenticationContextProvider = ({ children }) => {
    const [token, setToken] = useState(tokenValue);

    const onLogin = (token) => {
        if (!isTokenValid(token))
            return;

        setToken(token);
        localStorage.setItem("book-champions-token", token)
    }

    const onLogout = () => {
        setToken(null);
        localStorage.removeItem("book-champions-token");
    }
    return (
        <AuthenticationContext value={{
            token,
            onLogin,
            onLogout
        }}>
            {children}
        </AuthenticationContext>
    )
}

export default AuthenticationContextProvider