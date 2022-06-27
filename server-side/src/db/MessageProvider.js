const connection = require("./config");

class MessageProvider {

    async save(messageContent) {
        const { userId, message } = messageContent;   

        await connection("messages").insert({
            message: message,
            user_id: userId 
        }).then(() => {
            return true;
        }).catch(err => {
            return false;
        });
    }

    async get(messageContent = null) {

        if (messageContent === null) { 
            return await connection("messages")
                .select("message", "name", "user_id", "messages.id")
                .join("users", { "users.id": "messages.user_id" }); 
        }

        return await connection("messages")
            .select("message", "name", "user_id", "messages.id")
            .join("users", { "users.id": "messages.user_id" })
            .where({
                user_id: messageContent.userId,
                message: messageContent.message
            })
            .orderBy("id", "desc")
            .limit(1);
    }

}

module.exports = { MessageProvider };
