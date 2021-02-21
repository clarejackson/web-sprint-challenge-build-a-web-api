// Write your "actions" router here!
// [GET] /api/actions returns an array of actions (or an empty array) as the body of the response.
// [GET] /api/actions/:id returns an action with the given id as the body of the response.
// [POST] /api/actions returns the newly created action as the body of the response.
// [PUT] /api/actions/:id returns the updated action as the body of the response.
// [DELETE] /api/actions/:id returns no response body.

const express = require('express');

const router = express.Router();

const actions = require('./actions-model')

router.get('/', (req, res, next) => {
  actions.get()
  .then((posts) => {
    res.status(200).json(posts)
  })
  .catch(next)
});

module.exports = router