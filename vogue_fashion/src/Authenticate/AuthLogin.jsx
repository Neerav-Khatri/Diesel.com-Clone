import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const LoginAuth = createContext();

export default function LoginAuthProvider({children}) {
    const [auth, setAuth] = useState(false);
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleLogin = (value) => {
        setAuth(true);
        setName(value);
    };

    const handleLogout = () => {
        setAuth(false);
        setName("");
        navigate("/");
    };

    return (
        <LoginAuth.Provider value={{ auth, name, handleLogin, handleLogout }} >
            {children}
        </LoginAuth.Provider>
    )
};