const express = require("express");
const router = express.Router();

// importar rutas específicas
const usersRoutes = require("./users.routes");
const exercisesRoutes = require("./exercises.routes");
const workoutPlansRoutes = require("./workoutPlans.routes");
const workoutExercisesRoutes = require("./workoutExercises.routes");

// configurar subrutas
router.use("/users", usersRoutes);
router.use("/exercises", exercisesRoutes);
router.use("/workoutPlans", workoutPlansRoutes);
router.use("/workoutExercises", workoutExercisesRoutes);

module.exports = router;
