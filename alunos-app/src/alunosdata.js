// src/alunosData.js

let alunos = [
    { id: 1, nome: "João" },
    { id: 2, nome: "Maria" },
    { id: 3, nome: "José" },
  ];
  
  export const getAlunos = () => {
    return alunos;
  };
  
  export const addAluno = (nome) => {
    const novoAluno = { id: alunos.length + 1, nome };
    alunos.push(novoAluno);
  };
  
  export const updateAluno = (id, nome) => {
    const aluno = alunos.find(aluno => aluno.id === id);
    if (aluno) {
      aluno.nome = nome;
    }
  };
  
  export const deleteAluno = (id) => {
    alunos = alunos.filter(aluno => aluno.id !== id);
  };
  