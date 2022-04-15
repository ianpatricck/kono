const { UserProvider } = require("../../db/UserProvider");
const { CreateUserController } = require("./CreateUserController");
const { CreateUserUseCase } = require("./CreateUserUseCase");

const createUserUseCase = new CreateUserUseCase(new UserProvider);
const createUserController = new CreateUserController(createUserUseCase);

module.exports = createUserController;
