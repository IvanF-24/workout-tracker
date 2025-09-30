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

// GET /users/:id
router.get('/:id', (req, res) => {
  const { id } = req.params;   // 1
  const user = users.find(u => u.id === id);   // 2

  if (!user) {   // 3
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  res.status(200).json(user);   // 4
});

module.exports = router; // Export the router

