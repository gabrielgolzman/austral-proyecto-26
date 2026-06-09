import { Navigate, Outlet } from "react-router"

const Protected = ({ isSignedIn }) => {
    if (false)
        return <Navigate to="/login" replace />

    return <Outlet />;
}

export default Protected