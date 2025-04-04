// src/components/AlunoList.js
import React from 'react';
import { Link } from 'react-router-dom'; // Link é usado para navegar entre páginas
import { getAlunos } from '../alunosData'; // Função para pegar os dados dos alunos

const AlunoList = () => {
  const alunos = getAlunos(); // Pegamos os alunos

  return (
    <div>
      <h2>Lista de Alunos</h2>
      <ul>
        {alunos.map(aluno => (
          <li key={aluno.id}>
            {aluno.nome} 
            <Link to={`/editar/${aluno.id}`}>Editar</Link> | 
            <Link to={`/deletar/${aluno.id}`}>Deletar</Link>
          </li>
        ))}
      </ul>
      <Link to="/editar/novo">Adicionar Novo Aluno</Link>
    </div>
  );
};

export default AlunoList;
