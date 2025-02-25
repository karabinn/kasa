import { useState } from "react";
import ArrowOpen from "../../assets/arrow.png";
import "./Collapse.scss";
import PropTypes from 'prop-types';


function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse-container">
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <h2 className="collapse-title">{title}</h2>
        <img 
          src={ArrowOpen} 
          alt="Flèche" 
          className={`arrow ${isOpen ? "open" : "close"}`} 
        />
      </div>
      {isOpen && <div className="content">{content}</div>}
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default Collapse;