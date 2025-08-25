import { useState } from "react";


function AdminLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {
        try {
            const res = await fetch("http://localhost:5000/api/admin/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({username, password}),
            });
            const data = await res.json();
            console.log(data);
            if (data.token) localStorage.setItem("jwt", data.token);
            window.location.reload();
        } catch (error) {
            console.log("ERROR: " + error);
        }
    };

    return (
        <div className="flex flex-col w-48">
            <h2>Admin Login Page</h2>
            <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
            <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
            <button className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-700 cursor-pointer hover:scale-110 transition easy-in-out duration-150" onClick={login}>Login</button>
        </div>
    )
}

export default AdminLogin;