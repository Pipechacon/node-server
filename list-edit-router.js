const express = require('express');
const listEditRouter = express.Router();
const errorHandlerMiddleware = require('./error-handler-middleware');
const methodValidatorMiddleware = require('./method-validator-middleware');

// Middleware para manejar errores
listEditRouter.use(errorHandlerMiddleware);

// Middleware para validar métodos HTTP
listEditRouter.use(methodValidatorMiddleware);

// Ruta para crear una nueva tarea
listEditRouter.post('/create-task', (req, res) => {
  // Implementa la lógica para crear una nueva tarea
  res.send('Tarea creada exitosamente');
});

// Ruta para eliminar una tarea
listEditRouter.delete('/delete-task/:taskId', (req, res) => {
  // Implementa la lógica para eliminar una tarea con el ID proporcionado
  res.send('Tarea eliminada exitosamente');
});

// Ruta para actualizar una tarea
listEditRouter.put('/update-task/:taskId', (req, res) => {
  // Implementa la lógica para actualizar una tarea con el ID proporcionado
  res.send('Tarea actualizada exitosamente');
});

module.exports = listEditRouter;
