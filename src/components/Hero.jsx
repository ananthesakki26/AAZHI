import React from "react";
import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import { CONTACT_INFO } from "../data/seafoodData";

// Local assets
import logoImg from "../assets/images/logo.png";
import heroBg from "../assets/images/hero-bg.png";

const Hero = () => {
  return (
    <section
      className="position-relative d-flex align-items-center justify-content-center min-vh-100 overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle at center, rgba(6, 43, 58, 0.65) 0%, rgba(3, 24, 32, 0.96) 100%), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="container position-relative py-5"
        style={{ zIndex: 2, marginTop: "80px" }}
      >
        <div className="row justify-content-center text-center">
          <div className="col-xl-9 col-lg-10 d-flex flex-column align-items-center">
            {/* Responsive Brand Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="mb-4 d-flex justify-content-center w-100"
            >
              <img
                src={logoImg}
                alt="AAZHI Rameswaram Fresh Seafood"
                style={{
                  width: "clamp(160px, 20vw, 260px)",
                  height: "auto",
                  maxHeight: "140px",
                  objectFit: "contain",
                  filter: "drop-shadow(0 6px 20px rgba(0, 0, 0, 0.55))",
                }}
              />
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="display-3 font-serif text-white fw-bold lh-sm mb-3"
            >
              THE DEEP SEA <br />
              <span className="fst-italic" style={{ color: "var(--c-accent)" }}>
                TASTES DIFFERENT.
              </span>
            </motion.h1>

            {/* Sub-tagline */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="lead text-white-50 mb-2 fs-5"
            >
              From the deep waters of Rameswaram to your home.
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="text-white-50 mx-auto mb-5 fw-light"
              style={{
                maxWidth: "580px",
                lineHeight: 1.8,
                fontSize: "0.95rem",
              }}
            >
              There is a taste that comes only from the open sea — naturally
              rich, flavourful and distinctive.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="d-flex flex-wrap justify-content-center gap-3"
            >
              <Link to="/our-catch" className="btn-luxury-gold">
                EXPLORE THE CATCH
              </Link>
              <a
                href={`https://wa.me/91${CONTACT_INFO.phone1.replace(/\s+/g, "")}?text=${CONTACT_INFO.whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-outline"
              >
                PRE-BOOK NOW
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="position-absolute bottom-0 start-50 translate-middle-x mb-4 text-center text-white-50"
      >
        <span
          className="d-block letter-space-wide mb-1"
          style={{ fontSize: "0.65rem" }}
        >
          SCROLL TO DISCOVER
        </span>
        <FiArrowDown />
      </motion.div>
    </section>
  );
};

export default Hero;
