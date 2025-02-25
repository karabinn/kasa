import "./Rating.scss"
import RedStar from "../../assets/redstar.svg"
import GreyStar from "../../assets/greystar.svg"
import PropTypes from 'prop-types'


function Rating({rating}){
    return(
        <div className="ratings-container">
      <div className="stars">
        {[...Array(5)].map((_, index) => (
          <img 
            key={index} 
            src={index < rating ? RedStar : GreyStar} 
            alt={index < rating ? "red star" : "grey star"} 
          />
        ))}
      </div>
    </div>
  );
}

Rating.propTypes = {
        rating: PropTypes.number.isRequired,
      };

export default Rating