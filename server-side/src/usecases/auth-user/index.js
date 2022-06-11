const { UserProvider } = require("../../db/UserProvider");
const { AuthUserController } = require("./AuthUserController");
const { AuthUserUseCase } = require("./AuthUserUseCase");

const authUserUseCase = new AuthUserUseCase(new UserProvider);
const authUserController = new AuthUserController(authUserUseCase);

module.exports = authUserController;
