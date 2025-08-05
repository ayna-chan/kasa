import { useParams } from "react-router-dom";
import data from "../data/data.json";
import Slideshow from "../components/Slideshow";

export default function Logement() {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);

  if (!logement) {
    return <h2>Logement introuvable</h2>;
  }

  return (
    <div>
      <Slideshow pictures={logement.pictures} />
      <h1>{logement.title}</h1>
      <p>{logement.location}</p>
    </div>
  );
}