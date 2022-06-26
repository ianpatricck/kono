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

    async get(userId = null) {

        if (userId === null) { 
            return await connection("messages").select("message", "name", "user_id", "messages.id").join("users", { "users.id": "messages.user_id" }); 
        }

        return await connection("messages").where({ user_id: userId }).select("message", "name", "user_id", "messages.id").join("users", { "users.id": "messages.user_id" });
    }

}

module.exports = { MessageProvider };
