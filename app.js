const express = require('express');
const bodyParser = require('body-parser');
const { Pessoal, Educacao, Experiencia, Habilidade } = require('./models');

const app = express();
app.use(bodyParser.json());

// Rotas para Dados Pessoais
app.get('/pessoal', async (req, res) => {
  const pessoal = await Pessoal.findAll();
  res.json(pessoal);
});

app.post('/pessoal', async (req, res) => {
  const novoPessoal = await Pessoal.create(req.body);
  res.json(novoPessoal);
});

// Rotas para Educação
app.get('/educacao', async (req, res) => {
  const educacao = await Educacao.findAll();
  res.json(educacao);
});

app.post('/educacao', async (req, res) => {
  const novaEducacao = await Educacao.create(req.body);
  res.json(novaEducacao);
});

// Rotas para Experiência
app.get('/experiencia', async (req, res) => {
  const experiencia = await Experiencia.findAll();
  res.json(experiencia);
});

app.post('/experiencia', async (req, res) => {
  const novaExperiencia = await Experiencia.create(req.body);
  res.json(novaExperiencia);
});

// Rotas para Habilidades
app.get('/habilidades', async (req, res) => {
  const habilidades = await Habilidade.findAll();
  res.json(habilidades);
});

app.post('/habilidades', async (req, res) => {
  const novaHabilidade = await Habilidade.create(req.body);
  res.json(novaHabilidade);
});

const PORT = process.env.PORT || 3001;  
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

