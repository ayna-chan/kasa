// export default function About() {
//   return <h1>À propos</h1>;
// }

// import Banner from "../components/Banner"
// import bannerImage from "../assets/banner-about.jpg"

// export default function About() {
//   return (
//     <>
//       <Banner image={bannerImage} />
//       <main className="about-content">

//       </main>
//     </>
//   )
// }

// import Collapse from "../components/Collapse";

// export default function About() {
//   return (
//     <div className="about">
//       <Collapse title="Fiabilité">
//         <p>Les annonces postées sur Kasa garantissent une fiabilité totale...</p>
//       </Collapse>
//       <Collapse title="Respect">
//         <p>La bienveillance fait partie des valeurs fondatrices de Kasa...</p>
//       </Collapse>
//       {/* Autres sections */}
//     </div>
//   );
// }

import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import bannerImage from "../assets/banner-about.jpg";

export default function About() {
  return (
    <>
      <Banner image={bannerImage} />
      <main className="about-content">
        <Collapse title="Fiabilité">
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
        </Collapse>
        <Collapse title="Respect">
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </Collapse>
        <Collapse title="Service">
          <p>La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.</p>
        </Collapse>
        <Collapse title="Sécurité">
          <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        </Collapse>
      </main>
    </>
  );
}
