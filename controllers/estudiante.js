// controllers/estudiante.js
const Estudiante = require('../models/estudiante');

const getAllEstudiantes = async(req, res) => {
    try {
        const estudiantes = await Estudiante.getAll();
        res.json(estudiantes);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const getEstudianteByCodigo = async(req, res) => {
    try {
        const estudiante = await Estudiante.getByCodigo(req.params.codigo);
        if (!estudiante) {
            return res.status(404).json({ message: 'Estudiante no encontrado' });
        }
        res.json(estudiante);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const createEstudiante = async(req, res) => {
    try {
        const { codigo, nombres, correo } = req.body;
        const nuevoEstudiante = await Estudiante.create(codigo, nombres, correo);
        res.status(201).json(nuevoEstudiante);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const updateEstudiante = async(req, res) => {
    try {
        const { codigo, nombres, correo } = req.body;
        const actualizado = await Estudiante.update(codigo, nombres, correo);
        res.status(200).json(actualizado);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const deleteEstudiante = async(req, res) => {
    try {
        await Estudiante.delete(req.params.codigo);
        res.json({ message: 'Estudiante eliminado correctamente' });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = { getAllEstudiantes, getEstudianteByCodigo, createEstudiante, updateEstudiante, deleteEstudiante };