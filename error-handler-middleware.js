// error-handler-middleware.js
const errorHandlerMiddleware = (err, req, res, next) => {
    console.error(err.stack);
    res.status(400).send('Bad Request');
  };
  
  module.exports = errorHandlerMiddleware;
  