import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-content">
        <a href="#" className="company-name">
          Management Services Group SAL (Offshore)
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#affiliates">Affiliates</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}