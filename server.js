import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

// Rotas para Alunos
app.get('/alunos', async (req, res) => {
  const alunos = await prisma.aluno.findMany({ include: { boletim: true } });
  res.json(alunos);
});

app.post('/alunos', async (req, res) => {
  const aluno = await prisma.aluno.create({ data: req.body });
  res.json(aluno);
});

app.put('/alunos/:id', async (req, res) => {
  const { id } = req.params;
  const aluno = await prisma.aluno.update({ where: { id: Number(id) }, data: req.body });
  res.json(aluno);
});

app.delete('/alunos/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.aluno.delete({ where: { id: Number(id) } });
  res.json({ message: 'Aluno removido' });
});

// Rotas para Boletins
app.get('/boletins', async (req, res) => {
  const boletins = await prisma.boletim.findMany({ include: { aluno: true } });
  res.json(boletins);
});

app.post('/boletins', async (req, res) => {
  const boletim = await prisma.boletim.create({ data: req.body });
  res.json(boletim);
});

// Inicializar servidor
app.listen(3000, () => console.log('Servidor rodando na porta 3000'));

export default app;