import { useEffect, memo } from "react";
import { api } from "../api";

function LoadReceivedMessages({ setReceivedMessages }) {    
    
    useEffect(() => {  
        api.get("/message/get").then(res => {
            setReceivedMessages(res.data);
        });
    });

    return <></>;
}

export default memo(LoadReceivedMessages);
