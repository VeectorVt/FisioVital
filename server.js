const express = require('express');
const path = require('path');
const app = express();

// Servir arquivos estáticos
app.use(express.static(__dirname));

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota para página sobre
app.get('/sobre', (req, res) => {
  res.sendFile(path.join(__dirname, 'sobre.html'));
});

// Rota para página da equipe
app.get('/equipe', (req, res) => {
  res.sendFile(path.join(__dirname, 'equipe.html'));
});

// Porta do servidor
const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});