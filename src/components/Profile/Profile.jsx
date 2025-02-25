import "./Profile.scss"
import PropTypes from 'prop-types';



function Profile({profile}){
    return (
    <div className="profile">
        <img src={profile.picture} alt={profile.name} className="profile-picture" />
        <h3 className="profile-name">{profile.name}</h3>
    </div>)
}

Profile.propTypes = {
    profile: PropTypes.shape({
        picture: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
    };
export default Profile