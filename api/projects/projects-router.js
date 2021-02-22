// Write your "projects" router here!
// [GET] /api/projects returns an array of projects (or an empty array) as the body of the response.
// [GET] /api/projects/:id returns a project with the given id as the body of the response.
// [POST] /api/projects returns the newly created project as the body of the response.
// [PUT] /api/projects/:id returns the updated project as the body of the response.
// [DELETE] /api/projects/:id returns no response body.
// [GET] /api/projects/:id/actions sends an array of actions (or an empty array) as the body of the response.

const express = require('express');

const { validateProjectId } = require('../middleware/middleware')

const router = express.Router();

const projects = require('./projects-model')

router.get('/', (req, res, next) => {
  projects.get()
  .then((project) => {
    res.status(200).json(project)
  })
  .catch(next)
});

router.get('/:id', validateProjectId(), (req, res) => {
  res.json(req.project)
});

module.exports = router