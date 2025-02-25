import "./Banner.scss";
import PropTypes from "prop-types";

function Banner({ image, text }) {
  return (
    <div className="kasa-banner" style={{ backgroundImage: `url(${image})` }}>
      {text && <p>{text}</p>}
    </div>
  );
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default Banner;
