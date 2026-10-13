function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="row g-4">
          <section className="col-md-6">
            <h2>Links</h2>
            <a href="#">Home</a>
            <a href="#">Computer Science</a>
            <a href="#">Courses</a>
            <a href="#">Reports</a>
          </section>

          <section className="col-md-6">
            <h2>Contact Info</h2>
            <a href="#">Contact Us</a>
            <p>+1: 123 456 7890</p>
            <p>tm@studentportal.com</p>
          </section>
        </div>

        <div className="copyright">
          © 2024 StudentPortal. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
