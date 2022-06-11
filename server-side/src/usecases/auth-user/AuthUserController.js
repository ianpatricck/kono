const { AuthUserUseCase } = require("./AuthUserUseCase");

class AuthUserController {

    usecase = null;

    constructor(usecase) {
        this.usecase = usecase;
    }

    async handle(req, res) {

        const { token } = req.body;

        try {
            
            const authStatus = await this.usecase.execute(token);
           
            return res.status(201).json(authStatus);

        } catch (err) {
            return res.json({
                error: err.message
            });
        } 
    }
}

module.exports = { AuthUserController };
