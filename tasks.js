// tasks.js
const express = require('express');
const router = express.Router();

// Lista de tareas (podrías usar una base de datos en un entorno de producción)
let tasks = [
  { id: 1, title: 'Hacer la compra', completed: false },
  { id: 2, title: 'Estudiar para el examen', completed: true },
  // ... más tareas
];

// Middleware para parsear el cuerpo de las solicitudes como JSON
router.use(express.json());

// Obtener todas las tareas
router.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Obtener una tarea por su ID
router.get('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === taskId);

  if (!task) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }

  res.json(task);
});

// Crear una nueva tarea
router.post('/tasks', (req, res) => {
  const newTask = req.body;
  newTask.id = tasks.length + 1; // Simplemente incrementamos el ID (podrías usar un método más robusto en producción)
  tasks.push(newTask);
  res.status(201).json({ createdTask: newTask });
});

// Actualizar una tarea por su ID
router.put('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const updatedTask = req.body;

  tasks = tasks.map((task) =>
    task.id === taskId ? { ...task, ...updatedTask } : task
  );

  res.json({ updatedTask });
});

// Eliminar una tarea por su ID
router.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  tasks = tasks.filter((task) => task.id !== taskId);
  res.status(204).send(); // Sin contenido en la respuesta
});

// Obtener tareas completas
router.get('/tasks/completed', (req, res) => {
  const completedTasks = tasks.filter((task) => task.completed);
  res.json(completedTasks);
});

// Obtener tareas incompletas
router.get('/tasks/incomplete', (req, res) => {
  const incompleteTasks = tasks.filter((task) => !task.completed);
  res.json(incompleteTasks);
});

module.exports = router;
