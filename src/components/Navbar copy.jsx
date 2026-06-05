function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Techplus Ec.</div>
      <ul className="navbar-menu">
        <li><a href="#">Inicio</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#contact">Contacto</a></li>
        <li><a href="#contact" className="navbar-cta">Agendar</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
