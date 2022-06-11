import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../context/AppContext';
import { api } from "../api";

export default function Room() {

    const { message } = useContext(Context)
    const navigate = useNavigate();

    useEffect(() => {

        const token = localStorage.getItem("auth_token");

        api.post("user/auth", { token }).then((res) => {
        
            if (res.status !== 201 && res.data !== true) {

                localStorage.clear(); 
                navigate("/");                
            }

        });

    }, [navigate]);

    return (
        <>
            <h1>{ message }</h1>
        </>
    )
};
