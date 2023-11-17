const express = require('express');
const app = express();
const methodValidatorMiddleware = require('./method-validator-middleware');

// Importar los routers
const listViewRouter = require('./list-view-router');
const listEditRouter = require('./list-edit-router');

// Middleware a nivel de aplicación para validar métodos HTTP
app.use(methodValidatorMiddleware);

// Usar los routers
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
