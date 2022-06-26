class SendMessageUseCase {
    
    messageProvider = null;

    constructor(messageProvider) {
        this.messageProvider = messageProvider;
    }

    execute(messageContent) {
        this.messageProvider.save(messageContent);
    }
}

module.exports = { SendMessageUseCase };
