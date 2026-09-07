import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import { CONTACT_INFO } from "../data/seafoodData";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/our-catch", label: "Our Catch" },
    { to: "/karuvadu", label: "Karuvadu" },
    { to: "/how-it-works", label: "How It Works" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed-top w-100 transition-all ${
        scrolled ? "glass-nav-scrolled py-3" : "bg-transparent py-4"
      }`}
      style={{ zIndex: 1000, transition: "all 0.4s ease" }}
    >
      <div className="container d-flex align-items-center justify-content-between">
        {/* Brand */}
        <Link to="/" className="text-decoration-none d-flex flex-column">
          <span className="font-serif fw-bold text-white fs-3 lh-1 tracking-wide">
            AAZHI{" "}
            <span className="font-tamil fs-5 fw-normal text-warning">
              | ஆழி
            </span>
          </span>
          <span
            className="text-white-50 letter-space-wide"
            style={{ fontSize: "0.65rem" }}
          >
            RAMESWARAM FRESH SEAFOOD
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="d-none d-lg-flex align-items-center gap-4">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-decoration-none fw-medium transition-all ${
                  isActive ? "text-warning" : "text-white"
                }`
              }
              style={{ fontSize: "0.9rem", letterSpacing: "0.04em" }}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Action Button */}
        <div className="d-none d-lg-block">
          <a
            href={`https://wa.me/91${CONTACT_INFO.phone1.replace(/\s+/g, "")}?text=${CONTACT_INFO.whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury-gold"
          >
            Pre-Book Now <FiArrowRight />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="d-lg-none btn text-white p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Navigation"
        >
          {mobileOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="d-lg-none overflow-hidden"
            style={{
              backgroundColor: "var(--c-dark)",
              borderBottom: "1px solid rgba(201, 154, 74, 0.2)",
            }}
          >
            <div className="container py-4 d-flex flex-column gap-3">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `text-decoration-none py-2 fs-5 font-serif ${
                      isActive ? "text-warning" : "text-white"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-3">
                <a
                  href={`https://wa.me/91${CONTACT_INFO.phone1.replace(/\s+/g, "")}?text=${CONTACT_INFO.whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury-gold w-100 justify-content-center"
                >
                  Pre-Book Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
