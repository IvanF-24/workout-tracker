const express = require("express");
const router = express.Router();

// importar rutas específicas
const usersRoutes = require("./users.routes");
const exercisesRoutes = require("./exercises.routes");

// configuración de rutas
router.use("/users", usersRoutes);
router.use("/exercises", exercisesRoutes);

module.exports = router;
