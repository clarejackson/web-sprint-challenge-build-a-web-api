// validate action id
// validate post id
// validate action body
// validate post body

const actions = require('../actions/actions-model')
const projects = require('../projects/projects-model')

function validateActionId() {
  return (req, res, next) => {
    actions.get(req.params.id)
    .then((action) => {
      if (action) {
        req.action = action
        next()
      } else {
        res.status(404).json({
          message: "action not found",
        })
      }
    })
  }
}

function validateProjectId() {
  return (req, res, next) => {
    projects.get(req.params.id)
    .then((project) => {
      if (project) {
        req.project = project
        next()
      } else {
        res.status(404).json({
          message: "project not found",
        })
      }
    })
  }
}

function validateProject() {
  return (req, res, next) => {
    if (!req.body) {
      return res.status(400).json({
        message: "missing project data"
      })
    } 
    if (!req.body.name || !req.body.description) {
      return res.status(400).json({
        message: "missing required field"
      })
    }
    next()
  }
}

function validateAction() {
  return (req, res, next) => {
    if (!req.body) {
      return res.status(400).json({
        message: "missing action data"
      })
    }
    if (!req.body.project_id) {
      return res.status(400).json({
        message: "missing project_id"
      })
    }
    if(!req.body.description || !req.body.notes) {
      return res.status(400).json({
        message: "missing input fields"
      })
    }
    next()
  }
}


module.exports = {
  validateActionId,
  validateProjectId,
  validateProject,
  validateAction,

}