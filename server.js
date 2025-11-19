const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Datos simulados del coche
let carStatus = {
  battery: 84,
  range: 172,
  temp: 72,
  tire: 32,
  mode: 'Sport'
};

app.use(express.json());

// Servir archivos estáticos (frontend)
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint de estado del coche
app.get('/api/status', (req, res) => {
  res.json(carStatus);
});

// Actualizar estado del coche
app.post('/api/status', (req, res) => {
  const data = req.body;
  carStatus = { ...carStatus, ...data };
  res.json({ ok: true, status: carStatus });
});

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
