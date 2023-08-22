import React from "react";

export default function TabelaLivros({ livros }) {
  return (
    <div className="livros">
      <h1>Tabela livros</h1>
      {livros.length === 0 && <h2>Nenhuma pagina encontrada!..</h2>}
      {livros.length > 0 && (
        <table>
          <thead className="line-colum">
            <tr>
              <th width="17%">ISBN</th>
              <th>Titulo</th>
              <th>Autor</th>
              <th width="7%"></th>
              <th width="9%"></th>
            </tr>
          </thead>
          <tbody className="line-body">
            {livros.map((livro) => (
              <tr key={livro.id}>
                <td>{livro.isbn}</td>
                <td>{livro.titulo}</td>
                <td>{livro.autor}</td>
                <td>
                  <button className="botao editar">
                    Editar
                  </button>
                </td>
                <td>
                  <button className="botao remover">
                    Remover
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
