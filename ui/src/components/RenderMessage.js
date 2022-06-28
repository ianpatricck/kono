import { useState, useEffect, useContext, memo } from "react";
import { Context } from "../context/AppContext";
import LoadReceivedMessages from "./LoadReceivedMessages";

function MessageContainer({ userId, receivedMessages, messagesFromSocket }) {  

    receivedMessages.sort((a, b) => a.id > b.id ? -1 : true);
    messagesFromSocket.sort((a, b) => a.id > b.id ? -1 : true);

    return (
        <>

            {messagesFromSocket.length !== 0 ? messagesFromSocket.map((content, index) => (
                <div className={userId === content.user_id ? "sent" : "received"} key={index}>
                    <span>{content.name}</span>
                    <p>{content.message}</p> 
                </div> 
            )) : null}

            {receivedMessages.map((content, index) => (
                <div className={userId === content.user_id ? "sent" : "received"} key={index}>
                    <span>{content.name}</span>
                    <p>{content.message}</p> 
                </div> 
            ))}

        </>
    )
}

function RenderMessage() {

    const [receivedMessages, setReceivedMessages] = useState([]);
    const [messagesFromSocket, setMessagesFromSocket] = useState([]);
    const userId = localStorage.getItem("user_id"); 
    const { socket } = useContext(Context);

    useEffect(() => {

        socket.on("room-message-received", msg => {
            setMessagesFromSocket((prev) => [...prev, msg[0]]);
        });
 
        return () => socket.removeAllListeners();

    }, [socket]);

    return (
        <section className="messages">

            <LoadReceivedMessages setReceivedMessages={setReceivedMessages} />

            {
                receivedMessages.length === 0 ? (
                    <span className="loading">No messages</span> ) : (
                        <MessageContainer 
                            userId={userId} 
                            receivedMessages={receivedMessages} 
                            messagesFromSocket={messagesFromSocket}
                        /> 
                    )
            }

        </section>
    )

}

export default memo(RenderMessage);
