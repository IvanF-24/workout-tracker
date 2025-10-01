let workoutPlans = [
  {
    id: "2001",
    usuario_id: 1,
    fecha_creacion: "2025-09-10T09:00:00Z",
    comentarios: "Plan de hipertrofia para 3 meses"
  }
];

// Get all workout plans
const getWorkoutPlans = (req, res) => {
  const { usuario_id, search } = req.query;
  let result = workoutPlans;

  if (usuario_id) {
    result = result.filter(p => p.usuario_id == usuario_id);
  }

  if (search) {
    result = result.filter(p =>
      p.comentarios.toLowerCase().includes(search.toLowerCase())
    );
  }

  res.status(200).json(result);
};

// Get:id
const getWorkoutPlanById = (req, res) => {
  const { id } = req.params;
  const plan = workoutPlans.find(p => p.id === id);

  if (!plan) return res.status(404).json({ error: "Plan no encontrado" });

  res.status(200).json(plan);
};
