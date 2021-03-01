const express = require('express');

const actionsRouter = require('./actions/actions-router')
const projectsRouter = require('./projects/projects-router')

const server = express();
// Complete your server here!
// Do NOT `server.listen()` inside this file!
server.use(express.json());

server.use("/api/actions", actionsRouter)
server.use("/api/projects", projectsRouter)

server.get('/', (req, res) => {
  res.status(200).json({api: "Hello, World!"});
});

server.use((err, req, res, next) => {
  console.log(err)

  res.status(500).json({
    message: "Something went wrong, please try again"
  })
})

module.exports = server;
