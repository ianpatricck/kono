const { Router } = require("express");
const createUserController = require("./usecases/create-user");

const router = Router();

router.post("/user/create", (req, res) => createUserController.handle(req, res));

module.exports = { router };
