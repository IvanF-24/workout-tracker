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

// POST /workoutSchedules
const createWorkoutSchedule = (req, res) => {
  const { plan_id, usuario_id, fecha_hora, estado } = req.body;

  if (!plan_id || !usuario_id || !fecha_hora) {
    return res.status(400).json({ error: "plan_id, usuario_id y fecha_hora son requeridos" });
  }

  const newSchedule = {
    id: `${Date.now()}`, // id único
    plan_id,
    usuario_id,
    fecha_hora,
    estado: estado || "pendiente"
  };

  workoutSchedules.push(newSchedule);

  res.status(201).json(newSchedule);
};