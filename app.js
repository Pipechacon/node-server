// app.js
const express = require('express');
const app = express();
const methodValidatorMiddleware = require('./method-validator-middleware');

// Importar el nuevo router de tareas
const tasksRouter = require('./tasks');
 

// Middleware a nivel de aplicación para validar métodos HTTP
app.use(methodValidatorMiddleware);

// Usar el nuevo router de tareas bajo la ruta '/api/tasks'
app.use('/api/tasks', tasksRouter);

// Importar los routers existentes
const listViewRouter = require('./list-view-router');
const listEditRouter = require('./list-edit-router');

// Usar los routers existentes
app.use('/list-view', listViewRouter);
app.use('/list-edit', listEditRouter);

// Ruta para la raíz
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Puerto en el que el servidor escucha
const PORT = 5000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
