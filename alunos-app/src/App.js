// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Importando Routes, não Switch
import AlunoList from './components/AlunoList';  // Verifique se o caminho está correto
import EditAluno from './components/EditAluno';  // Verifique se o caminho está correto
import DeleteAluno from './components/DeleteAluno';  // Verifique se o caminho está correto

const App = () => {
  return (
    <Router>
      <div>
        <h1>Gestão de Alunos</h1>
        <Routes>  {/* Use "Routes" em vez de "Switch" */}
          <Route path="/" element={<AlunoList />} />
          <Route path="/editar/:id" element={<EditAluno />} />
          <Route path="/deletar/:id" element={<DeleteAluno />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
