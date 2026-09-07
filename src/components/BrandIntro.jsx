import React from "react";
import { motion } from "framer-motion";

import brandFishImg from "../assets/images/brand-intro.png";

const BrandIntro = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "var(--c-bg)" }}>
      <div className="container py-lg-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span className="letter-space-wide text-muted mb-2 d-block">
              EDITORIAL ORIGIN
            </span>
            <h2
              className="display-4 font-serif fw-bold mb-4"
              style={{ color: "var(--c-primary)" }}
            >
              FROM THE OPEN SEA. <br />
              <span
                className="fst-italic"
                style={{ color: "var(--c-secondary)" }}
              >
                TO YOUR HOME.
              </span>
            </h2>
            <div className="gold-line mb-4"></div>
            <p
              className="lead fw-normal text-muted mb-4"
              style={{ lineHeight: 1.8 }}
            >
              At AAZHI, we bring the fresh catch of Rameswaram closer to you, so
              you can enjoy the real taste of the sea at your home in Chennai.
            </p>
            <div className="d-flex flex-wrap gap-4 pt-2">
              <div>
                <span
                  className="d-block fw-bold fs-5"
                  style={{ color: "var(--c-primary)" }}
                >
                  FRESH CATCH
                </span>
                <small className="text-muted">Direct from ocean</small>
              </div>
              <div className="vr d-none d-sm-block"></div>
              <div>
                <span
                  className="d-block fw-bold fs-5"
                  style={{ color: "var(--c-primary)" }}
                >
                  RICH TASTE
                </span>
                <small className="text-muted">Unmatched oceanic flavour</small>
              </div>
              <div className="vr d-none d-sm-block"></div>
              <div>
                <span
                  className="d-block fw-bold fs-5"
                  style={{ color: "var(--c-primary)" }}
                >
                  RAMESWARAM ORIGIN
                </span>
                <small className="text-muted">Pristine coral waters</small>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="position-relative"
            >
              <img
                src={brandFishImg}
                alt="Fresh Rameswaram sea fish"
                className="img-fluid rounded-4 shadow-lg w-100"
                style={{ maxHeight: "520px", objectFit: "cover" }}
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandIntro;
