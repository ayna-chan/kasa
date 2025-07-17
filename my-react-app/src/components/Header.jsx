import { NavLink } from "react-router-dom";
import "../styles/_header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="src/assets/logo.svg" alt="Kasa logo" />
      </div>

      <nav className="header__nav">

        <NavLink to="/" className={({ isActive }) =>isActive ? "header__link active" : "header__link"}>Accueil
        </NavLink>

        <NavLink to="/about" className={({ isActive }) =>isActive ? "header__link active" : "header__link"}>A Propos
        </NavLink>
        
      </nav>
    </header>
  );
}
