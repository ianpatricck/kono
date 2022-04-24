import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { HomeDisplay, StyledLink, ErrorMessage } from '../styles/components';
import { api } from "../api";

export default function Home() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const navigate = useNavigate();

    async function submitLoginData(e) {
        e.preventDefault();

        if (email.trim() === "" || password.trim() === "") {
            return setError("Empty fields");
        }

        await api.post("/user/login", { email, password }).then((res) => {
            if (res.status === 200) {
                console.log(res.data);
            } else {
                setError(res.data.error);
            }
        });
    }

    return (
        <>
            <HomeDisplay onSubmit={submitLoginData} method="POST">
                <h1>kono chat</h1>

                <div>
                    <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Enter</button>
                </div>

                <StyledLink to="/signup" style={{ marginTop: "40px" }}>Sign Up</StyledLink>

                {error ? <ErrorMessage>{error}</ErrorMessage> : null}
            </HomeDisplay>
        </>
    )
};
