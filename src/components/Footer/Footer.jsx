import "../Footer/footer.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <ul>
          <li>
            <a href="https://www.facebook.com/">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/">
              <FaTwitter />
            </a>
          </li>
        </ul>
        <p>&copy; 2023 Juan González. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
