class CreateUserUseCase {

    userProvider = null;

    constructor(userProvider) {
        this.userProvider = userProvider;
    }

    async execute(data) {

        Object.values(data).map(element => {
            if (element === "" || element === undefined || element === null) {
               throw new Error("Fields don't can be empty");  
            }
        });

        const userAlreadyExists = await this.userProvider.findByEmail(data.email);
        const emailIsValid = await this.userProvider.emailIsValid(data.email);

        if (userAlreadyExists === true) {
            throw new Error("Email already exists");
        }

        if (emailIsValid === false) {
            throw new Error("Email format is not valid");
        }

        await this.userProvider.create(data);
    }
}

module.exports = { CreateUserUseCase };
