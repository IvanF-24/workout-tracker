const express = require("express"); // Import express
const router = express.Router(); // Create a router instance


//importar rutas especificas 
const usersRoutes = require('./users.routes');

//Configuracion de rutas
router.use('/users', usersRoutes);

module.exports = router; // Export the router

