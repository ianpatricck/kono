const { MessageProvider } = require("../../db/MessageProvider");
const { SendMessageController } = require("./SendMessageController");
const { SendMessageUseCase } = require("./SendMessageUseCase");

const sendMessageUseCase = new SendMessageUseCase(new MessageProvider);
const sendMessageController = new SendMessageController(sendMessageUseCase);

module.exports = sendMessageController;
