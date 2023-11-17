// param-validator-middleware.js
const paramValidatorMiddleware = (req, res, next) => {
    const { taskId } = req.params;
  
    if (!taskId || isNaN(taskId)) {
      return res.status(400).send('Invalid parameter');
    }
  
    next();
  };
  
  module.exports = paramValidatorMiddleware;
  