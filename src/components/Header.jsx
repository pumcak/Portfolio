import { Link, NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const onHome = location.pathname === "/";

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link to="/" className="brand">Portfolio de Timeo</Link>

        <nav className="navbar" aria-label="Navigation principale">
          {onHome ? <a href="#about">A propos</a> : <Link to="/#about">A propos</Link>}
          <NavLink to="/projets">Projets</NavLink>
          {onHome ? <a href="#contact">Contact</a> : <Link to="/#contact">Contact</Link>}
        </nav>
      </div>
    </header>
  );
}
