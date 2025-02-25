import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logementsData from "../../logements.json";
import "./LogementsDetails.scss";
import Tags from "../../components/Tags/Tags";
import Profile from "../../components/Profile/Profile";
import Collapse from "../../components/Collapse/Collapse";
import Rating from "../../components/Rating/Rating";
import Carrousel from "../../components/Carrousel/Carrousel";

function LogementDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const foundLogement = logementsData.find((item) => item.id === id);
    if (!foundLogement) {
      navigate("/error", { replace: true });
    } else {
      setLogement(foundLogement);
    }
  }, [id, navigate]);

  if (logement === null) {
    return null;
  }

  return (
    <div className="logement-details">
      <Carrousel images={logement.pictures} />
      <div className="logement-header">
        <div>
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div className="logement-info">
            <Tags tags={logement.tags} />
          </div>
        </div>
        <div className="part-right">
          <Profile profile={logement.host} />
          <div className="rating">
            <Rating rating={logement.rating} />
          </div>
        </div>
      </div>

      <div className="collapse">
        <Collapse title="Description" content={logement.description} />
        <Collapse
          title="Équipements"
          content={
            <ul className="equipments-list">
              {logement.equipments.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}

export default LogementDetails;
