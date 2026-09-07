import React from "react";
import { motion } from "framer-motion";
import { FRESH_FISH } from "../data/seafoodData";

const SeafoodSection = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container py-lg-4">
        <div className="text-center max-w-700 mx-auto mb-5">
          <span className="letter-space-wide text-warning">
            AUTHENTIC SELECTION
          </span>
          <h2
            className="display-5 font-serif fw-bold mt-2"
            style={{ color: "var(--c-primary)" }}
          >
            FRESH SEA CATCH
          </h2>
          <p className="text-muted">Straight from the waters of Rameswaram.</p>
        </div>

        <div className="row g-4">
          {FRESH_FISH.map((fish, idx) => (
            <div className="col-md-6 col-lg-4" key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="luxury-card h-100 d-flex flex-column"
              >
                <div className="overflow-hidden" style={{ height: "260px" }}>
                  <img
                    src={fish.img}
                    alt={fish.english}
                    className="w-100 h-100 object-fit-cover transition-all"
                    style={{ transition: "transform 0.6s ease" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.08)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                    loading="lazy"
                  />
                </div>
                <div className="p-4 d-flex flex-column flex-grow-1">
                  <span className="font-tamil fs-4 fw-bold text-dark mb-1">
                    {fish.tamil}
                  </span>
                  <h3
                    className="fs-5 font-serif fw-semibold mb-2"
                    style={{ color: "var(--c-secondary)" }}
                  >
                    {fish.english}
                  </h3>
                  <p className="text-muted small mb-4 flex-grow-1">
                    {fish.desc}
                  </p>
                  <div className="pt-3 border-top d-flex justify-content-between align-items-center">
                    <span className="badge rounded-pill text-bg-light border text-muted">
                      Seasonal Availability
                    </span>
                    <span className="small text-warning fw-semibold">
                      Rameswaram Origin
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <p className="text-muted fst-italic small">
            * Availability varies with the day's catch and marine weather
            conditions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SeafoodSection;
