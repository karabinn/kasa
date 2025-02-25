import "./Tags.scss";
import PropTypes from "prop-types";

function Tags({ tags }) {
  return (
    <ul className="tag-list">
      {tags.map((tag, index) => (
        <li className="tag" key={index}>
          {tag}
        </li>
      ))}
    </ul>
  );
}

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tags;
