class AuthUserUseCase {

    userProvider = null;

    constructor(userProvider) {
        this.userProvider = userProvider;
    }

    async execute(data) {
        const isAuth = await this.userProvider.auth(data); 
        
        if (isAuth === false) {
            throw new Error("Não foi possível autenticar usuário");
        }

        return isAuth;
    }
}

module.exports = { AuthUserUseCase };
