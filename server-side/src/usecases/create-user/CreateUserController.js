class CreateUserController {

    usecase = null;

    constructor(usecase) {
        this.usecase = usecase;
    }

    async handle(req, res) {

        const { name, email, password } = req.body;

        try {
            await this.usecase.execute({ name, email, password });
            
            return res.status(201).json({
                success: "User was created"
            });

        } catch (err) {
            return res.json({
                error: err.message
            });
        }

    }
}

module.exports = { CreateUserController };
