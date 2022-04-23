const { UserProvider } = require("../../db/UserProvider");
const { LoginController } = require("./LoginController");
const { LoginUseCase } = require("./LoginUseCase");

const loginUseCase = new LoginUseCase(new UserProvider);
const loginController = new LoginController(loginUseCase);

module.exports = loginController;
