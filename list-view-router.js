const express = require('express');
const listViewRouter = express.Router();
const paramValidatorMiddleware = require('./param-validator-middleware');

// Middleware para validar parámetros
listViewRouter.use('/:taskId', paramValidatorMiddleware);

// Ruta para obtener tareas completas
listViewRouter.get('/completed-tasks', (req, res) => {
  // Implementa la lógica para obtener y enviar tareas completas
  res.send('Lista de tareas completas');
});

// Ruta para obtener tareas incompletas
listViewRouter.get('/incomplete-tasks', (req, res) => {
  // Implementa la lógica para obtener y enviar tareas incompletas
  res.send('Lista de tareas incompletas');
});

module.exports = listViewRouter;
