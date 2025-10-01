// src/controllers/workoutSchedule.controller.js

// Estado en memoria (simulación)
let workoutSchedules = [
  {
    id: "4001",
    plan_id: 2001,
    usuario_id: 1,
    fecha_hora: "2025-09-21T18:00:00Z",
    estado: "pendiente"
  }
];

// GET /workoutSchedules
const getWorkoutSchedules = (req, res) => {
  res.status(200).json(workoutSchedules);
};

// GET /workoutSchedules/:id
const getWorkoutScheduleById = (req, res) => {
  const { id } = req.params;
  const schedule = workoutSchedules.find(s => s.id === id);

  if (!schedule) {
    return res.status(404).json({ error: "WorkoutSchedule no encontrado" });
  }

  res.status(200).json(schedule);
};