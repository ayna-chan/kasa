import { useParams } from "react-router-dom";
import data from "../data/data.json";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import "../styles/_logement.scss";

export default function Logement() {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);

  if (!logement) {
    return <h2>Logement introuvable</h2>;
  }

  // Séparation prénom / nom sinon impossible d'empiler
  const [firstName, lastName] = logement.host.name.split(" ");

  return (
    <div className="logement-container">
      <Slideshow pictures={logement.pictures} />

      <div className="logement-header">
        <div className="logement-info">
          <h1>{logement.title}</h1>
          <p className="location">{logement.location}</p>
          <div className="tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="host-rating">
          <div className="host">
            <div className="host-name">
              <span>{firstName}</span>
              <span>{lastName}</span>
            </div>
            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className="host-picture"
            />
          </div>
          <div className="rating">
            {Array.from({ length: 5 }, (_, i) => (
              <span
                key={i}
                className={i < logement.rating ? "star filled" : "star"}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="collapse-section">
        <div className="collapse-item">
          <Collapse title="Description">
            <p>{logement.description}</p>
          </Collapse>
        </div>
        <div className="collapse-item">
          <Collapse title="Équipements">
            <ul>
              {logement.equipments.map((eq, index) => (
                <li key={index}>{eq}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </div>
  );
}
