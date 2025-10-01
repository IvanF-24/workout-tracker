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
