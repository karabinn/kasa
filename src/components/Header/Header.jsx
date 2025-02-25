import { Link } from "react-router-dom";
import logo from '../../assets/logoheader.png';
import './Header.scss'; 
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className="kasa-header">
    <NavLink to="/"><img src={logo} alt='Logo Kasa' className='header-logo' />
    </NavLink>

     <nav>
       <ul>
       <li><Link to="/">Accueil</Link></li>
       <li><Link to="/about">À propos</Link></li>
      </ul>
    </nav>
    </div>
  );
}

export default Header;
