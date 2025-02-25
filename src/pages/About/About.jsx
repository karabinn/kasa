import "./About.scss";
import Banner from "../../components/Banner/Banner";
import aboutImage from "../../assets/imagebanner2.png";
import aboutContent from "../../assets/about-content.json";
import Collapse from "../../components/Collapse/Collapse";

function About() {
  return (
    <div className="about-container">
      <Banner text="" image={aboutImage} />
      <ul className="about-content">
        {aboutContent.map((content) => (
          <li key={content.id}>
            <Collapse title={content.title} content={content.description} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default About;
