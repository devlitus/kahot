import React from "react";
import { Link } from "react-router-dom";
import './header.css';
export const Header = () => {
  return (
  <nav className="navegator">
    <ul className="navegator-list">
      <li className="navegator-list__item"><Link className="navegator-list__item__link" to="/">Kaooht a la Catalana</Link></li>
      <li><Link to="/inici">Inici</Link></li>
      <li><Link to="/registrarse">Registrar-se</Link></li>
    </ul>
  </nav>
  );
};
