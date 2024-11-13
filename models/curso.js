// models/curso.js
const db = require('../config/mysql');

const Curso = {
    getAll: async () => {
        const [rows] = await db.query('SELECT id, nombre, creditos FROM curso');
        return rows;
    },
    getById: async (id) => {
        const [rows] = await db.query('SELECT id, nombre, creditos FROM curso WHERE id = ?', [id]);
        return rows[0];
    },
    create: async (id, nombre, creditos) => {
        await db.query('INSERT INTO curso (id, nombre, creditos) VALUES (?, ?, ?)', [id, nombre, creditos]);
        return { id, nombre, creditos };
    },
    update: async (id, nombre, creditos) => {
        await db.query('UPDATE curso SET nombre = ?, creditos = ? WHERE id = ?', [nombre, creditos, id]);
        return { id, nombre, creditos };
    },
    delete: async (id) => {
        await db.query('DELETE FROM curso WHERE id = ?', [id]);
        return { id };
    }
};

module.exports = Curso;
