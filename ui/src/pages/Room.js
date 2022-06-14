import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../context/AppContext';
import { SmoothPage, Navbar, MessageBox, TextField } from '../styles/components';

export default function Room() {

    const { isAuth, authStatus } = useContext(Context)
    const navigate = useNavigate();

    useEffect(() => {

        const token = localStorage.getItem("auth_token");

        isAuth(token);

        if (authStatus === false) {
            navigate("/");
        }

    }, [navigate, isAuth, authStatus]);

    function logout() {
        localStorage.clear();
        navigate("/");
    }

    return (
        <SmoothPage>

            <Navbar>
                
                <nav className="options">
                    <button onClick={logout}>Logout</button>
                </nav>

                <nav className="users">
                    <div>P</div>
                    <div>Q</div>
                    <div>R</div>
                    <div>S</div>
                    <div>T</div>
                </nav>
                
            </Navbar> 

            <MessageBox></MessageBox>
            <TextField></TextField>

        </SmoothPage>
    )
};
