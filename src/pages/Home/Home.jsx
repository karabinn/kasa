import Banner from "../../components/Banner/Banner";
import homeImage from "../../assets/imagebanner.png";
import logementsData from "../../logements.json";

import "./Home.scss";
import Card from "../../components/Cards/Card";

function Home() {
  return (
    <>
      <Banner image={homeImage} text="Chez vous, partout et ailleurs" />
      <div className="home-container">
        <div className="card-container">
          {logementsData.map((logement) => (
            <Card
              key={logement.id}
              id={logement.id}
              title={logement.title}
              cover={logement.cover}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
