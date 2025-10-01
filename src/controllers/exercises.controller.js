// src/controllers/exercises.controller.js

// Estado en memoria (simulación)
let exercises = [
  {
    id: "101",
    nombre: "Press de banca",
    descripcion: "Ejercicio de fuerza para trabajar el pecho y tríceps.",
    categoria: "fuerza",
    grupo_muscular: "pecho"
  }
];

// GET /exercises
const getExercises = (req, res) => {
  const { categoria, grupo_muscular, search } = req.query;
  let result = exercises;

  if (categoria) {
    result = result.filter(e => e.categoria === categoria);
  }

  if (grupo_muscular) {
    result = result.filter(e => e.grupo_muscular === grupo_muscular);
  }

  if (search) {
    result = result.filter(e =>
      e.nombre.toLowerCase().includes(search.toLowerCase())
    );
  }

  res.status(200).json(result);
};

// GET /exercises/:id
const getExerciseById = (req, res) => {
  const { id } = req.params;
  const exercise = exercises.find(e => e.id === id);

  if (!exercise) {
    return res.status(404).json({ error: "Ejercicio no encontrado" });
  }

  res.status(200).json(exercise);
};

