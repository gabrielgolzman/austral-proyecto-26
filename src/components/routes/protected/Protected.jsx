import { useContext } from "react";
import { Navigate, Outlet } from "react-router"
import { isTokenValid } from "../../../helpers";
import { AuthenticationContext } from "../../../services/auth/authenticationContext/AuthenticationContext";

const Protected = () => {
    const { token } = useContext(AuthenticationContext)

    if (!isTokenValid(token))
        return <Navigate to="/login" replace />

    return <Outlet />;
}

export default Protected