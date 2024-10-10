import React, { useState } from "react";

function LembreteEntrada({ adicionarLembrete }) {
  const [novoLembrete, setNovoLembrete] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (novoLembrete.trim() !== "") {
      adicionarLembrete(novoLembrete);
      setNovoLembrete("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          style={{
            border: "1px solid #007bff",
            height: "50px",
          }}
          value={novoLembrete}
          onChange={(e) => setNovoLembrete(e.target.value)}
          placeholder="Digite um novo lembrete"
        />
      </div>
      <button
        className="btn btn-primary w-100"
        style={{ height: "50px" }}
        type="submit"
      >
        Adicionar
      </button>
    </form>
  );
}

export default LembreteEntrada;
