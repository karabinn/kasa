import { Link } from "react-router-dom";
import "./Error.scss";

function Error() {
  return (
    <div className="error-content">
      <h1>404</h1>
      <p>Oups ! La page que vous demandez n&#8217;existe pas.</p>
      <Link to="/" className="error-link">
        Retourner sur la page d&#8217;accueil
      </Link>
    </div>
  );
}

export default Error;
