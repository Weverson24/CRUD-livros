import { Component } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";

import Menu from "./components/Menu";
import TabelaLivros from "./components/TabelaLivros";
import CadastrarLivros from "./pages/CadastrarLivros";
import Error from "./pages/Error";

class App extends Component {
  state = {
    livros: [
      {
        id: 1,
        isbn: "978-85-7522-403-8",
        titulo: "HTML - 2 Edição",
        autor: "Mouricio Samy Silva",
      },
      {
        id: 2,
        isbn: "978-85-7522-807-4",
        titulo: "Introdução ao pentest",
        autor: "Daniel Moreno",
      },
      {
        id: 3,
        isbn: "978-85-7522-780-8",
        titulo:
          "Internet das coisas para Desenvolvedores",
        autor: "Ricardo da Silva Ogliari",
      },
    ],
  };

  inserirLivros = (livro) => {
    livro.id = this.state.livros.length + 1;
    this.setState({
      livros: [...this.state.livros, livro],
    });

    console.log("Livro novo cadastrado");
  };

  render() {
    return (
      <BrowserRouter className="App">
        <Menu />
        <Routes>
          <Route
            path="/"
            element={
              <TabelaLivros
                livros={this.state.livros}
              />
            }
          />
          <Route
            path="/cadastrar"
            element={
              <CadastrarLivros
                livro={{
                  id: 0,
                  isbn: "",
                  titulo: "",
                  autor: "",
                }}
                inserirLivros={this.inserirLivros}
              />
            }
          />

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
