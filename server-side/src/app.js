const http = require("http");
const express = require("express");
const cors = require("cors");
const { router } = require("./routes");

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(router);

module.exports = { server };

