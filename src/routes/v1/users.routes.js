const express = require("express"); // Import express
const router = express.Router(); // Create a router instance

// Estado en memoria (simulación)
let users = [
  {
    id: "b42f53fa-7b30-4b91-8d36-dc1c6ef27611",
    name: "Ivan Florez",
    email: "ivan@example.com",
    role: "user",
    createdAt: "2025-09-12T12:00:00Z"
  }
];

//get /api/v1/users
router.get("/", (req, res) => {
  res.status(200).json(users);
});

module.exports = router; // Export the router

