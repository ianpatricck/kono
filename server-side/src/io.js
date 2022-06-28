const { Server } = require("socket.io");
const { server } = require("./app");

const sendMessageController = require("./usecases/send-message");
const getMessageController = require("./usecases/get-message");

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000"
    }
});

io.on("connection", (socket) => {  

    socket.join("default");

    socket.on("room-message-sent", (msg) => {

        sendMessageController.handle(msg);
        
        setTimeout(() => {

            const messageReceivedPromise = getMessageController.getOne(msg);
            
            messageReceivedPromise.then((response) => {
                socket.nsp.to("default").emit("room-message-received", response);
            });
        
        }, 1500);

    });
    
});

module.exports = { server };

