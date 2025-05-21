const express = require('express');
const path = require('path');
const app = express();

// Servir arquivo index.html na rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Servir arquivos estáticos dos diretórios
app.use(express.static(__dirname));

// Porta do servidor
const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});