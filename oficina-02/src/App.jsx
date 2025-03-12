import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [alunos, setAlunos] = useState([]);
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');

  const fetchAlunos = async () => {
    try {
      const response = await axios.get('http://localhost:3000/alunos');
      setAlunos(response.data);
    } catch (error) {
      console.error('Erro ao buscar alunos:', error);
    }
  };

  useEffect(() => {
    fetchAlunos();
  }, []);

  const handleAddAluno = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/alunos', { nome, idade: Number(idade) });
      setAlunos([...alunos, response.data]);
      setNome('');
      setIdade('');
    } catch (error) {
      console.error('Erro ao adicionar aluno:', error);
    }
  };

  const handleDeleteAluno = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/alunos/${id}`);
      setAlunos(alunos.filter(aluno => aluno.id !== id));
    } catch (error) {
      console.error('Erro ao remover aluno:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Gestão de Alunos</h1>
      <form onSubmit={handleAddAluno} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          style={{ marginRight: '10px' }}
        />
        <input
          type="number"
          placeholder="Idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
          required
          style={{ marginRight: '10px' }}
        />
        <button type="submit">Adicionar Aluno</button>
      </form>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map(aluno => (
            <tr key={aluno.id}>
              <td>{aluno.id}</td>
              <td>{aluno.nome}</td>
              <td>{aluno.idade}</td>
              <td>
                <button onClick={() => handleDeleteAluno(aluno.id)}>Remover</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
