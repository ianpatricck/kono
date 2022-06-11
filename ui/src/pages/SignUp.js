import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { HomeDisplay, StyledLink, ErrorMessage, SmoothPage } from '../styles/components';
import { api } from "../api";

export default function SignUp() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {

        const token = localStorage.getItem("auth_token");

        if (token) {
            navigate("/room");                
        }

    }, [navigate]);

    function isEmail(email) {
        let regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

        if (email !== "" && email.match(regex)) {
            return true;
        } else {
            return false;
        }
    }

    async function submitRegisterData(e) {
        e.preventDefault();

        const data = [name, email, password, passwordConfirm];

        data.forEach(field => {
            if (field.trim() === "") {
                return setError("Empty fields");
            }
        });

        if (password !== passwordConfirm) {
            return setError("Passwords not match");
        }

        if (isEmail(email) === false) {
            return setError("Invalid email format");
        }

        await api.post("/user/create", { name, email, password }).then((res) => {
            if (res.status === 201) {
                navigate("/");
            } else {
                setError(res.data.error);
            }
        });
    }

    return (
        <>
            <SmoothPage>
                <HomeDisplay onSubmit={submitRegisterData} method="POST">
                    <h1>kono chat</h1>

                    <div>
                        <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                        <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        <input type="password" placeholder="Confirm password" onChange={(e) => setPasswordConfirm(e.target.value)} />
                        <button type="submit">Create</button>
                    </div>

                    <StyledLink to="/" style={{ marginTop: "40px" }}>Back to Sign In</StyledLink>

                    {error ? <ErrorMessage>{error}</ErrorMessage> : null}
                </HomeDisplay>
            </SmoothPage>

        </>
    )
}
