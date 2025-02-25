import logo from "../../assets/logofooter.png";
import "./Footer.scss";

function Footer() {
  return (
    <div className="kasa-footer">
      <img src={logo} alt="Logo Kasa" className="footer-logo" />
      <p>© 2025 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
