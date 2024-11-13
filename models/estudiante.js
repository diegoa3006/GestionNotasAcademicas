// models/estudiante.js
const db = require('../config/mysql');

const Estudiante = {
    getAll: async() => {
        const [rows] = await db.query('SELECT codigo, nombres, correo FROM estudiante');
        return rows;
    },
    getByCodigo: async(codigo) => {
        const [rows] = await db.query('SELECT codigo, nombres, correo FROM estudiante WHERE codigo = ?', [codigo]);
        return rows[0];
    },
    create: async(codigo, nombres, correo) => {
        await db.query('INSERT INTO estudiante (codigo, nombres, correo) VALUES (?, ?, ?)', [codigo, nombres, correo]);
        return { codigo, nombres, correo };
    },
    update: async(codigo, nombres, correo) => {
        await db.query('UPDATE estudiante SET nombres = ?, correo = ? WHERE codigo = ?', [nombres, correo, codigo]);
        return { codigo, nombres, correo };
    },
    delete: async(codigo) => {
        await db.query('DELETE FROM estudiante WHERE codigo = ?', [codigo]);
        return { codigo };
    }
};

module.exports = Estudiante;