import "../css/footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="social-links">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="assets/img/facebook-2429746_640.png" alt="Facebook" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="assets/img/instagram-1675670_640.png" alt="Instagram" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="assets/img/twitter-2430933_640.png" alt="Twitter" />
          </a>
        </div>
        <div className="footer-links">
          <a href="/conditions-of-use">Conditions of Use</a>
          <a href="/privacy-policy">Privacy & Policy</a>
          <a href="/press-room">Press Room</a>
        </div>
        <div className="copyright">
          © 2023프로젝트 김영우, 김경호, 이효민, 신민수, 박세준
        </div>
      </div>
    </footer>
  );
}
