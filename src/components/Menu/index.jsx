import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="menu">
      <ul className="menu-ul">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cadastrar">Cadastrar</Link>
        </li>
      </ul>
    </nav>
  );
}
