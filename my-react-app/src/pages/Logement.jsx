import { useParams } from "react-router-dom";
import data from "../data/data.json"; // adapte le chemin si besoin

export default function Logement() {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);

  if (!logement) {
    return <h2>Logement introuvable</h2>;
  }

  return (
    <div>
      <h1>{logement.title}</h1>
      <p>{logement.location}</p>
      <ul>
        {logement.pictures.map((img, index) => (
          <li key={index}>
            <img src={img} alt={`Photo ${index + 1}`} width="200" />
          </li>
        ))}
      </ul>
    </div>
  );
}
