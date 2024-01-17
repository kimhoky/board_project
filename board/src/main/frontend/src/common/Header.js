import { Link } from "react-router-dom";
import "../css/header.css";
export default function Header() {
  return (
    <header className="mw">
      <h1>
        <Link to="/">
        <img src="/img/logo.svg" alt="로고" />
        </Link>

      </h1>
      <nav>
        <Link to="/1">1</Link>
        <Link to="/2">2</Link>
        <Link to="/3">3</Link>
      </nav>
      <div>
        <a href="#">
          <i className="fa-solid fa-magnifying-glass"></i>
        </a>
        <a href="#">
          <i className="fa-solid fa-cart-arrow-down"></i>
        </a>
        <a href="#">
          <i className="fa-solid fa-person"></i>
        </a>
      </div>
    </header>
  );
}
