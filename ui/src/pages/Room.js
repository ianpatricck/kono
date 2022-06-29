import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../context/AppContext';
import { SmoothPage, Navbar, MessageBox, TextField } from '../styles/components';
import send from "../images/send.svg";
import RenderMessage from "../components/RenderMessage";

export default function Room() {

    const { isAuth, authStatus, socket } = useContext(Context);
    const navigate = useNavigate();
    const [message, setMessage] = useState("");

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

        window.location.reload();
    }

    function sendMessage(e) {
        e.preventDefault();

        const userId = localStorage.getItem("user_id");
        const name = localStorage.getItem("user_name");

        if (message.trim() !== "") {
            const messageContent = { userId, name, message: message.trim() }; 

            socket.emit("room-message-sent", messageContent);
            setMessage("");
        } 
    } 

    return (
        <SmoothPage>

            <Navbar>

                <nav className="options">
                    <button onClick={logout}>Logout</button>
                </nav> 

            </Navbar> 

            <MessageBox>
                <RenderMessage />

                <TextField method="POST">
                    <input type="text" name="message" placeholder="Type something..." onChange={(e) => setMessage(e.target.value)} value={message} />
                    <button onClick={sendMessage}>
                        <img src={send} alt="Send message"/>
                    </button>
                </TextField>
            </MessageBox>

        </SmoothPage>
    )
};
