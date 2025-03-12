import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [alunos, setAlunos] = useState([]);
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [loading, setLoading] = useState(false); // Estado para o botão

  // Buscar alunos ao carregar a página
  useEffect(() => {
    fetchAlunos();
  }, []);

  const fetchAlunos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/alunos");
      setAlunos(response.data);
    } catch (error) {
      console.error("Erro ao buscar alunos:", error);
      alert("Erro ao carregar alunos. Verifique a API.");
    }
  };

  const handleAddAluno = async (e) => {
    e.preventDefault();

    if (!nome.trim() || !idade.trim()) {
      alert("Preencha todos os campos!");
      return;
    }

    setLoading(true); // Desativa o botão enquanto adiciona

    try {
      const response = await axios.post("http://localhost:3000/alunos", {
        nome,
        idade: Number(idade), // Converte corretamente para número
      });

      setAlunos([...alunos, response.data]); // Atualiza a lista
      setNome(""); 
      setIdade("");
      alert("Aluno adicionado com sucesso!");
    } catch (error) {
      console.error("Erro ao adicionar aluno:", error);
      alert("Erro ao adicionar aluno. Verifique a API.");
    } finally {
      setLoading(false); // Reativa o botão
    }
  };

  const handleDeleteAluno = async (id) => {
    if (!window.confirm("Tem certeza que deseja remover este aluno?")) return;

    try {
      await axios.delete(`http://localhost:3000/alunos/${id}`);
      setAlunos(alunos.filter((aluno) => aluno.id !== id));
      alert("Aluno removido com sucesso!");
    } catch (error) {
      console.error("Erro ao remover aluno:", error);
      alert("Erro ao remover aluno. Verifique a API.");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Gestão de Alunos</h1>
      <form onSubmit={handleAddAluno} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <input
          type="number"
          placeholder="Idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
          required
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <button type="submit" disabled={loading} style={{ padding: "5px 10px" }}>
          {loading ? "Adicionando..." : "Adicionar Aluno"}
        </button>
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
          {alunos.length > 0 ? (
            alunos.map((aluno) => (
              <tr key={aluno.id}>
                <td>{aluno.id}</td>
                <td>{aluno.nome}</td>
                <td>{aluno.idade}</td>
                <td>
                  <button onClick={() => handleDeleteAluno(aluno.id)}>
                    Remover
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                Nenhum aluno cadastrado.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
