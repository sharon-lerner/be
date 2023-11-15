const express = require("express");
const server = express();
const bookRouter = require("./routers/BookRouter.js");
require("./dal/dal");

server.use(express.json());
server.use("/api/books", bookRouter);

server.listen(3000, () => console.log("server started."));
