import { Link } from "react-router-dom"; 
import PropTypes from 'prop-types';
import "./Card.scss";

function Card({id, title, cover}) {
    return (
        <Link to={`/logement/${id}`} className="card"> 
      <img src={cover} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
    </Link>
  );
}
Card.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  cover: PropTypes.string
}

export default Card;
