// server.js
const express = require('express');
const bodyParser = require('body-parser');
const Curso = require('./routes/curso');
const estudianteRoutes = require('./routes/estudiante');

require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use('/api/curso', Curso);
app.use('/api/estudiante', estudianteRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});