import { Outlet, Navigate} from "react-router-dom";

const ProtectedRoutes = () => {
    const isAuthenticated = localStorage.getItem("authorized_user") === "true";
    return isAuthenticated ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoutes