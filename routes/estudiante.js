// routes/estudiante.js
const express = require('express');
const EstudianteController = require('../controllers/estudiante');
const router = express.Router();

router.get('/', EstudianteController.getAllEstudiantes);
router.get('/:codigo', EstudianteController.getEstudianteByCodigo);
router.post('/', EstudianteController.createEstudiante);
router.put('/:codigo', EstudianteController.updateEstudiante);
router.delete('/:codigo', EstudianteController.deleteEstudiante);

module.exports = router;