import React, { useState } from 'react';

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
        <form onSubmit={handleSubmit} className="mb-3">
            <div className="input-group">
               <input 
                   type='text' 
                   className='form-control' 
                   value={novoLembrete} 
                   onChange={(e) => setNovoLembrete(e.target.value)} 
                   placeholder="Digite um novo lembrete" 
               />
               <button className="btn btn-primary" type="submit">Adicionar</button>
            </div>
        </form>
    );
}

export default LembreteEntrada;
