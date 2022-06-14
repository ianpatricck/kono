import React, { createContext, useState } from 'react';
import { api } from "../api";

const Context = createContext();

function ApplicationProvider({ children }) { 

    const [authStatus, setAuthStatus] = useState(null);

    function isAuth(token) {

        api.post("user/auth", { token }).then((res) => {
            if (res.status !== 201 && res.data !== true) {
                localStorage.clear();
                setAuthStatus(false);
            } else {
                setAuthStatus(true);
            }
        });

    }

    return (
        <Context.Provider value={{ isAuth, authStatus }}>
            { children }
        </Context.Provider>
    )
};

export { Context, ApplicationProvider };
