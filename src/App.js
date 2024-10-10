import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LembreteEntrada from "./LembreteEntrada";
import LembreteLista from "./LembreteLista";
import "./App.css";

function App() {
  const [lembretes, setLembretes] = useState([]);

  const adicionarLembrete = (novoLembrete) => {
    setLembretes([...lembretes, novoLembrete]);
  };

  const removerLembrete = (index) => {
    const novosLembretes = lembretes.filter((_, i) => i !== index);
    setLembretes(novosLembretes);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <h1>
            <i className="fas fa-bell fa-shake"></i> Gerenciador de Lembretes
          </h1>
          <p className="lead text-muted">Projeto - P1</p>
          <div className="lembretes-container p-4 rounded">
            <LembreteLista
              lembretes={lembretes}
              RemoverLembrete={removerLembrete}
            />
          </div>
          <LembreteEntrada adicionarLembrete={adicionarLembrete} />
        </div>
      </div>
    </div>
  );
}

export default App;
