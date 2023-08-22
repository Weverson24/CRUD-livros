import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
      <h1>404!</h1>
      <p>
        Lamento essa pagina não existe ou foi
        removida <br />
        <Link to="/">
          Voltar para a tabela de livros
        </Link>
      </p>
    </>
  );
}
