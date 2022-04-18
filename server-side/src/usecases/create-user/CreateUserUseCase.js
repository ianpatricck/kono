class CreateUserUseCase {

    userProvider = null;

    constructor(userProvider) {
        this.userProvider = userProvider;
    }

    async execute(data) { 

        const userAlreadyExists = await this.userProvider.findByEmail(data.email);

        if (userAlreadyExists === true) {
            throw new Error("Email already exists");
        } 

        await this.userProvider.create(data);
    }
}

module.exports = { CreateUserUseCase };
