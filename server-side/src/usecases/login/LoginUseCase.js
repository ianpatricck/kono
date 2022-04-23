class LoginUseCase {

    userProvider = null;

    constructor(userProvider) {
        this.userProvider = userProvider;
    }

    async execute(data) { 

        const isLogged = await this.userProvider.login(data);
         
        if (isLogged === false) {
            throw new Error("Error logging in");
        }

        return isLogged;
    }
}

module.exports = { LoginUseCase };
