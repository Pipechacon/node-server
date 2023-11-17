
const express = require('express');
const app = express();

// Importar los routers
const listViewRouter = require('./list-view-router');
const listEditRouter = require('./list-edit-router');

// Usar los routers
app.use('/list-view', listViewRouter);
app.use('/list-edit', listEditRouter);

// Resto de la configuración del servidor...

// Puerto en el que el servidor escucha
const PORT = 3000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});