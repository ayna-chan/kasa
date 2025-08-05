import "../styles/_footer.scss";
import logoNoir from "../assets/logo-noir.svg"; 

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logoNoir} alt="Kasa logo" className="footer__logo" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
