const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("./auth-router");
const usersRouter = require("./avalible-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/log", authRouter);
server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;


