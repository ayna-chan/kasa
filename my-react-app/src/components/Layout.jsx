import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">À propos</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
      </footer>
    </>
  );
}
