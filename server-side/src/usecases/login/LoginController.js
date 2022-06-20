class LoginController {

    usecase = null;

    constructor(usecase) {
        this.usecase = usecase;
    }

    async handle(req, res) {

        const { email, password } = req.body;

        try {

            const userData = await this.usecase.execute({ email, password }); 
            return res.status(201).json(userData);

        } catch (err) {
            return res.json({
                error: err.message
            });
        }

    }
}

module.exports = { LoginController };
