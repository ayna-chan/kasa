// export default function About() {
//   return <h1>À propos</h1>;
// }

import Banner from "../components/Banner"
import bannerImage from "../assets/banner-about.jpg"

export default function About() {
  return (
    <>
      <Banner image={bannerImage} />
      <main className="about-content">

      </main>
    </>
  )
}