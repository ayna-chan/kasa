// export default function Error() {
//   return <h1>404 - Oups! La page que vous demandez n'existe pas.</h1>;
// }

import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/_error.scss";

export default function Error() {
  return (
    <>
      <Header />
      <main className="error">
        <h1 className="error__code">404</h1>
        <p className="error__message">Oups! La page que vous demandez n'existe pas.</p>
        <a href="/" className="error__link">Retourner sur la page d’accueil</a>
      </main>
      <Footer />
    </>
  );
}
