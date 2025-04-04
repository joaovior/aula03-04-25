// src/components/EditAluno.js
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getAlunos, addAluno, updateAluno } from '../alunosData';

const EditAluno = () => {
  const { id } = useParams(); // Pegamos o id do aluno da URL
  const history = useHistory(); // Usamos isso para voltar para a lista de alunos

  const [aluno, setAluno] = useState({ nome: "" }); // Guardamos o nome do aluno que vamos editar

  useEffect(() => {
    if (id !== 'novo') {
      const alunoEncontrado = getAlunos().find(a => a.id === parseInt(id));
      if (alunoEncontrado) {
        setAluno(alunoEncontrado); // Se for editar, mostramos o nome atual do aluno
      }
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id === 'novo') {
      addAluno(aluno.nome); // Se for novo, adiciona o aluno
    } else {
      updateAluno(parseInt(id), aluno.nome); // Se for edição, atualiza o aluno
    }
    history.push('/'); // Depois de adicionar ou editar, voltamos para a lista de alunos
  };

  return (
    <div>
      <h2>{id === 'novo' ? 'Adicionar Aluno' : 'Editar Aluno'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={aluno.nome}
          onChange={(e) => setAluno({ ...aluno, nome: e.target.value })}
        />
        <button type="submit">{id === 'novo' ? 'Adicionar' : 'Salvar'}</button>
      </form>
    </div>
  );
};

export default EditAluno;
