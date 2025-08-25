import { useState, useEffect } from "react";
import AdminLogin from "../components/AdminLogin";

function ProtectedRoute({children}) {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem("jwt");
        setToken(storedToken);
    }, []);

    return token ? children : <AdminLogin />;
}

export default ProtectedRoute