// routes/curso.js
const express = require('express');
const CursoController = require('../controllers/curso');
const router = express.Router();

router.get('/', CursoController.getAllCursos);
router.get('/:id', CursoController.getCursoById);
router.post('/', CursoController.createCurso);
router.put('/:id', CursoController.updateCurso);
router.delete('/:id', CursoController.deleteCurso);

module.exports = router;