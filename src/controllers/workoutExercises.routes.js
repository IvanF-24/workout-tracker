const express = require("express");
const router = express.Router();

// Estado en memoria (simulación)
let workoutExercises = [
  {
    id: 301,
    plan_id: 2001,
    ejercicio_id: 101,
    series: 4,
    repeticiones: 12,
    peso: 40
  }
];

// 📌 GET /workoutExercises → listar todos
router.get("/", (req, res) => {
  res.status(200).json(workoutExercises);
});

// 📌 GET /workoutExercises/:id → buscar por ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const workoutExercise = workoutExercises.find(w => w.id == id);

  if (!workoutExercise) {
    return res.status(404).json({ error: "WorkoutExercise no encontrado" });
  }

  res.status(200).json(workoutExercise);
});

// 📌 POST /workoutExercises → crear nuevo
router.post("/", (req, res) => {
  const { plan_id, ejercicio_id, series, repeticiones, peso } = req.body;

  if (!plan_id || !ejercicio_id || !series || !repeticiones) {
    return res.status(400).json({ error: "Campos requeridos: plan_id, ejercicio_id, series, repeticiones" });
  }

  const newWorkoutExercise = {
    id: Date.now(), // id temporal
    plan_id,
    ejercicio_id,
    series,
    repeticiones,
    peso: peso || 0
  };

  workoutExercises.push(newWorkoutExercise);
  res.status(201).json(newWorkoutExercise);
});

// 📌 PUT /workoutExercises/:id → actualizar
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { plan_id, ejercicio_id, series, repeticiones, peso } = req.body;

  const index = workoutExercises.findIndex(w => w.id == id);
  if (index === -1) {
    return res.status(404).json({ error: "WorkoutExercise no encontrado" });
  }

  if (!plan_id || !ejercicio_id || !series || !repeticiones) {
    return res.status(400).json({ error: "Campos requeridos: plan_id, ejercicio_id, series, repeticiones" });
  }

  workoutExercises[index] = {
    ...workoutExercises[index],
    plan_id,
    ejercicio_id,
    series,
    repeticiones,
    peso
  };

  res.status(200).json(workoutExercises[index]);
});

// 📌 DELETE /workoutExercises/:id → eliminar
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const index = workoutExercises.findIndex(w => w.id == id);

  if (index === -1) {
    return res.status(404).json({ error: "WorkoutExercise no encontrado" });
  }

  const deleted = workoutExercises.splice(index, 1);
  res.status(200).json({ deleted: deleted[0].id });
});

module.exports = router;
