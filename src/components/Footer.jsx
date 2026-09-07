import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="text-white pt-5 pb-4"
      style={{ backgroundColor: "var(--c-dark)" }}
    >
      <div className="container">
        <div className="row g-4 justify-content-between align-items-center border-bottom border-secondary pb-4 mb-4">
          <div className="col-md-6 text-center text-md-start">
            <h2 className="font-serif fw-bold fs-3 mb-1">
              AAZHI <span className="font-tamil text-warning">| ஆழி</span>
            </h2>
            <p
              className="text-white-50 letter-space-wide mb-0"
              style={{ fontSize: "0.75rem" }}
            >
              RAMESWARAM FRESH SEAFOOD
            </p>
          </div>

          <div className="col-md-6">
            <nav className="d-flex flex-wrap justify-content-center justify-content-md-end gap-3">
              <Link to="/" className="text-white-50 text-decoration-none small">
                Home
              </Link>
              <Link
                to="/our-catch"
                className="text-white-50 text-decoration-none small"
              >
                Our Catch
              </Link>
              <Link
                to="/karuvadu"
                className="text-white-50 text-decoration-none small"
              >
                Karuvadu
              </Link>
              <Link
                to="/how-it-works"
                className="text-white-50 text-decoration-none small"
              >
                How It Works
              </Link>
              <Link
                to="/about"
                className="text-white-50 text-decoration-none small"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-white-50 text-decoration-none small"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>

        <div className="text-center mb-4">
          <p
            className="letter-space-wide text-warning mb-1"
            style={{ fontSize: "0.75rem" }}
          >
            FRESH CATCH • RICH TASTE • RAMESWARAM ORIGIN
          </p>
          <small className="text-white-50 d-block">
            Availability depends on the day's catch and season.
          </small>
        </div>

        <div className="text-center border-top border-dark-subtle pt-3">
          <small className="text-secondary" style={{ fontSize: "0.75rem" }}>
            © 2026 AAZHI | Rameswaram Fresh Seafood. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
