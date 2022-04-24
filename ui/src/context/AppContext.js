import React, { createContext, useState } from 'react';

const Context = createContext();

function ApplicationProvider({ children }) { 

    const [message, setMessage] = useState("Hello World");

    return (
        <Context.Provider value={{message}}>
            { children }
        </Context.Provider>
    )
};

export { Context, ApplicationProvider };
