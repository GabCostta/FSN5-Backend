require('dotenv').config();  // Carrega as variáveis do .env

const express = require('express');
const app = express();

const dbUrl = process.env.DATABASE_URL;

console.log("Database URL:", dbUrl);  // Verifica se a variável está carregada corretamente

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
