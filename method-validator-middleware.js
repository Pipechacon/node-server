// method-validator-middleware.js
const methodValidatorMiddleware = (req, res, next) => {
    const validMethods = ['GET', 'POST', 'DELETE', 'PUT'];
  
    if (!validMethods.includes(req.method)) {
      return res.status(400).send('Invalid HTTP method');
    }
  
    next();
  };
  
  module.exports = methodValidatorMiddleware;
  