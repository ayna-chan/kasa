import Banner from "../components/Banner"
import Card from "../components/Card"
import logements from "../data/data.json"
import bannerImage from "../assets/banner-home.jpg"

export default function Home() {
  return (
    <>
      <Banner image={bannerImage} text="Chez vous, partout et ailleurs" />

      <section className="cards-grid">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </section>
    </>
  )
}
