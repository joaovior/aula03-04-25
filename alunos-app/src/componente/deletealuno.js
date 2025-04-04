// src/components/DeleteAluno.js
import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { deleteAluno } from '../alunosData';

const DeleteAluno = () => {
  const { id } = useParams(); // Pegamos o id do aluno da URL
  const history = useHistory();

  const handleDelete = () => {
    deleteAluno(parseInt(id)); // Deleta o aluno
    history.push('/'); // Volta para a lista de alunos
  };

  return (
    <div>
      <h2>Deletar Aluno</h2>
      <p>Tem certeza de que deseja deletar esse aluno?</p>
      <button onClick={handleDelete}>Sim, excluir</button>
      <button onClick={() => history.push('/')}>Cancelar</button>
    </div>
  );
};

export default DeleteAluno;
