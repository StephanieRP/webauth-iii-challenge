const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("../../routes/auth.js");
const usersRouter = require("../../routes/users.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
  res.send("Serving is working now...!");
});

module.exports = server;
