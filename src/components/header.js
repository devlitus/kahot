import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
export const Header = () => {
  return (
    <nav className="navegator">
      <ul className="navegator-list">
        <li className="navegator-list__item">
          <Link className="link link--io" to="/">
            Kaooht a la Catalana
          </Link>
        </li>
        <li className="navegator-list__item">
          <Link className="link link--io" to="/inici">
            Inici
          </Link>
        </li>
        <li className="navegator-list__item">
          <Link className="link link--io" to="/registrarse">
            Registrar-se
          </Link>
        </li>
      </ul>
    </nav>
  );
};
