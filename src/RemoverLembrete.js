import React, { useState } from "react";
import LembreteEntrada from "./LembreteEntrada";
import LembreteLista from "./LembreteLista";
import "./App.css";

function App() {
  const RemoverLembrete = (index) => {
    const novosLembretes = lembretes.filter((_, i) => i !== index);
    setLembretes(novosLembretes);
  };
}

export default App;
