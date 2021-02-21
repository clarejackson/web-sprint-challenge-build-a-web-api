// validate action id
// validate post id
// validate action body
// validate post body

const actions = require('../actions/actions-model')
const projects = require('../projects/projects-model')

function validateActionId() {
  // DO YOUR MAGIC
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
    .catch(next)
  }
}


module.exports = {
  validateActionId,
  
}