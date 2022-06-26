class GetMessageController {

    messageProvider = null;

    constructor(messageProvider) {
        this.messageProvider = messageProvider;
    }

    async getAll(req, res) {

        try {

            const messages = await this.messageProvider.get();
            return res.json(messages);

        } catch (err) {
            return res.json({
                error: err.message
            });
        }
    }

}

module.exports = { GetMessageController };
