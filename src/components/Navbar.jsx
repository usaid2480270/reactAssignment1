import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container portal-navbar">
        <a className="navbar-brand" href="#">StudentPortal</a>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="portalNavbar"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`} id="portalNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link" href="#">Dashboard</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Students</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Courses</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Reports</a></li>
          </ul>

          <div className="navbar-tools">
            <a className="nav-link settings-link" href="#">Settings <span aria-hidden="true">⌄</span></a>
            <form className="d-flex search-form" role="search" onSubmit={(event) => event.preventDefault()}>
              <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-primary" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
