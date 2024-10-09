import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LembreteEntrada from "./LembreteEntrada";

function App() {
  const [lembretes, setLembretes] = useState([]);

  const adicionarLembrete = (novoLembrete) => {
    setLembretes([...lembretes, novoLembrete]);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <h1>Lembretes</h1>
          <LembreteEntrada adicionarLembrete={adicionarLembrete} />
          <ul className="list-group mt-3">
            {lembretes.map((lembrete, index) => (
              <li key={index} className="list-group-item">
                {lembrete}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

