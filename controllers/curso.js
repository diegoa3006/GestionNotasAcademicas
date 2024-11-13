// controllers/curso.js
const Curso = require('../models/curso');

const getAllCursos = async (req, res) => {
    try {
        const cursos = await Curso.getAll();
        res.json(cursos);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const getCursoById = async (req, res) => {
    try {
        const curso = await Curso.getById(req.params.id);
        if (!curso) {
            return res.status(404).json({ message: 'Curso no encontrado' });
        }
        res.json(curso);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const createCurso = async (req, res) => {
    try {
        const { id, nombre, creditos } = req.body;
        const nuevoCurso = await Curso.create(id, nombre, creditos);
        res.status(201).json(nuevoCurso);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const updateCurso = async (req, res) => {
    try {
        const { id, nombre, creditos } = req.body;
        const actualizado = await Curso.update(id, nombre, creditos);
        res.status(200).json(actualizado);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const deleteCurso = async (req, res) => {
    try {
        await Curso.delete(req.params.id);
        res.json({ message: 'Curso eliminado correctamente' });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = { getAllCursos, getCursoById, createCurso, updateCurso, deleteCurso };
