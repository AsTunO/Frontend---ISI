import { createContext, useState, useEffect, useMemo, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
    const [token, setToken_] = useState(localStorage.getItem("token"));

    const setToken = (newToken) => {
        setToken_(newToken);
    };

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            localStorage.setItem("token", token);
        } else {
            delete axios.defaults.headers.common["Authorization"];
            localStorage.removeItem("token");
        }
    }, [token]);

    const contextValue = useMemo(() => { token, setToken }, [token]);

    return (
        <AuthContext.Provider value={{ contextValue, setToken, token }}>
            {children}
        </AuthContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    return useContext(AuthContext);
}

export { AuthContext, AuthProvider };
