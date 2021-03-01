// Write your "actions" router here!
// [GET] /api/actions returns an array of actions (or an empty array) as the body of the response.
// [GET] /api/actions/:id returns an action with the given id as the body of the response.
// [POST] /api/actions returns the newly created action as the body of the response.
// [PUT] /api/actions/:id returns the updated action as the body of the response.
// [DELETE] /api/actions/:id returns no response body.

const express = require('express');

const { validateActionId, validateAction } = require('../middleware/middleware')

const router = express.Router();

const actions = require('./actions-model')

router.get('/', (req, res, next) => {
  actions.get()
  .then((action) => {
    res.status(200).json(action)
  })
  .catch(next)
});

router.get('/:id', validateActionId(), (req, res) => {
  res.json(req.action)
});

router.post('/', validateAction(), (req, res, next) => {
  actions.insert(req.body)
  .then((action) => {
    res.status(201).json(action)
  })
  .catch(next)
});

router.put('/:id', validateActionId(), validateAction(), (req, res, next) => {
  actions.update(req.params.id, req.body)
  .then((action) => {
    res.status(200).json(action)
  })
  .catch(next)
});

router.delete('/:id', validateActionId(), (req, res, next) => {
  actions.remove(req.params.id)
  .then((action) => {
    if (action) {
      res.status(200).json()
    }
  })
  .catch(next)
});



module.exports = router