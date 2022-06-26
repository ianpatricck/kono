const { MessageProvider } = require("../../db/MessageProvider");
const { GetMessageController } = require("./GetMessageController");

const getMessageController = new GetMessageController(new MessageProvider);

module.exports = getMessageController;
