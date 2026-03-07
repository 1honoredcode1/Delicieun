"use client";

import "../styles/footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="row">
          {/* Restaurant Info */}
          <div className="col-lg-4 col-md-6 footer-info">
            <h3>Délicieun</h3>
            <p>
              Oslo Way, 123
              <br />
              Oslo, Norway <br />
              <br />
              <strong>Phone:</strong> +47 12345678 <br />
              <strong>Email:</strong> delicieun@gmail.com <br />
            </p>
          </div>

          {/* Useful Links */}
          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#menu">Menu</a>
              </li>
              <li>
                <a href="#specials">Specials</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="col-lg-3 col-md-6 footer-hours">
            <h4>Opening Hours</h4>
            <p>
              Monday - Saturday <br />
              11:00 AM - 23:00 PM <br />
              <br />
              Sunday <br />
              Closed
            </p>
          </div>

          {/* Social */}
          <div className="col-lg-3 col-md-6 footer-social">
            <h4>Follow Us</h4>
            <p>Stay connected with us on social media.</p>

            <div className="social-links">
              <a href="#">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container text-center">
          <p>
            © {new Date().getFullYear()} <strong>Délicieun</strong>. All Rights
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
