import React, { Component } from "react";
import { Navigate } from "react-router-dom";

export class CadastrarLivros extends Component {
  state = {
    livro: {
      id: this.props.livro.id,
      isbn: this.props.livro.isbn,
      titulo: this.props.livro.titulo,
      autor: this.props.livro.autor,
    },
    redirecionar: false,
  };

  livroForm = (e) => {
    e.preventDefault();

    this.props.inserirLivros(this.state.livro);
    this.setState({ redirecionar: true });
  };

  render() {
    if (this.state.redirecionar === true) {
      return <Navigate to="/" replace={true} />;
    }
    return (
      <form onSubmit={this.livroForm}>
        <h1>Cadastrar livros</h1>
        <p>
          <label htmlFor="fisbn">
            ISBN: Fomato - ({" "}
            <span style={{ color: "red" }}>
              978-85-7522-xxx-x
            </span>
            )
          </label>
          <br />
          <input
            type="text"
            autoFocus
            id="fisbn"
            required
            pattern="^978-85-7522-[0-9]{3}-[0-9]{1}"
            onChange={(e) =>
              this.setState({
                livro: {
                  ...this.state.livro,
                  isbn: e.target.value,
                },
              })
            }
          />
        </p>
        <br />
        <p>
          <label htmlFor="ftitulo">Título</label>
          <br />
          <input
            type="text"
            autoFocus
            id="ftitulo"
            required
            onChange={(e) =>
              this.setState({
                livro: {
                  ...this.state.livro,
                  titulo: e.target.value,
                },
              })
            }
          />
        </p>
        <br />
        <p>
          <label htmlFor="fautor">Autor</label>
          <br />
          <input
            type="text"
            autoFocus
            id="fautor"
            required
            onChange={(e) =>
              this.setState({
                livro: {
                  ...this.state.livro,
                  autor: e.target.value,
                },
              })
            }
          />
        </p>
        <br />
        <p>
          <button
            type="submit"
            className="botao submit"
          >
            Cadastrar
          </button>
        </p>
      </form>
    );
  }
}

export default CadastrarLivros;
