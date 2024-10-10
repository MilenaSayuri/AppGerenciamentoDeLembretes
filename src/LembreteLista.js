import React from "react";

function LembreteLista({ lembretes, RemoverLembrete }) {
  //   const lembretesFicticios = [
  //     "Preparar aula de programação",
  //     "Fazer feira",
  //     "Preparar marmitas",
  //   ];
  return (
    <div className="d-flex flex-column align-items-center mt-3">
      {lembretes.map((lembrete, index) => (
        <div
          key={index}
          className="btn btn-light lembrete-item mb-2"
          onClick={() => RemoverLembrete(index)}
        >
          {lembrete}
        </div>
      ))}
    </div>
  );
}

export default LembreteLista;
