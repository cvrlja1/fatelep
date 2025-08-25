import Header from "../components/Header"
import { useState } from "react";

function Admin() {
    const [jwt, setJwt] = useState(null);

    const logout = () => {
        const token = localStorage.getItem("jwt");
        if (token) {
            localStorage.removeItem("jwt");
        }
        window.location.reload();
    }

    return (
        <div className="admin">
            <Header />
            <h1>ADMIN PAGE LOGGED IN</h1>
            <button className="bg-orange-500 shadow-sm hover:cursor-pointer" onClick={logout}>LOGOUT</button>
        </div>
    )
}

export default Admin