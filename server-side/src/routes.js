const { Router } = require("express");

const createUserController = require("./usecases/create-user");
const loginController = require("./usecases/login");

const router = Router();

router.post("/user/create", (req, res) => createUserController.handle(req, res));
router.post("/user/login", (req, res) => loginController.handle(req, res));

module.exports = { router };
