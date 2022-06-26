class SendMessageController {
    
    usecase = null;
    
    constructor(usecase) {
        this.usecase = usecase;
    }

    async handle(messageContent) {

        try {
    
            await this.usecase.execute(messageContent); 

        } catch (err) {
            console.log(err.message);
            return -1;       
        }
    }
}

module.exports = { SendMessageController };
