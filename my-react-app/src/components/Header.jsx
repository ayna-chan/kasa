import { NavLink } from "react-router-dom";
import "../styles/_header.scss";
import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Kasa logo" />
      </div>

      <nav className="header__nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "header__link active" : "header__link"
          }
        >
          Accueil
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "header__link active" : "header__link"
          }
        >
          À propos
        </NavLink>
      </nav>
    </header>
  );
}
