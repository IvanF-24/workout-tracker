// Estado en memoria (simulación)
let workoutReports = [
  {
    id: 6001,
    usuario_id: 1,
    fecha_inicio: "2025-08-01",
    fecha_fin: "2025-08-31",
    total_entrenamientos: 12,
    ejercicios_mas_frecuentes: ["Sentadillas", "Press de banca", "Dominadas"],
    mejora_por_grupo_muscular: {
      pecho: "+10 kg en press banca",
      piernas: "+15 kg en sentadillas",
      espalda: "Mayor número de repeticiones en dominadas"
    }
  }
];

// GET /workoutReports/:id
const getWorkoutReportById = (req, res) => {
  const { id } = req.params;
  const report = workoutReports.find(r => r.id == id);

  if (!report) {
    return res.status(404).json({ error: "Reporte no encontrado" });
  }

  res.status(200).json(report);
};

// GET /workoutReports
const getWorkoutReports = (req, res) => {
  res.status(200).json(workoutReports);
};
