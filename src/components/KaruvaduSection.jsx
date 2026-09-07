import React from "react";
import { motion } from "framer-motion";
import { KARUVADU_DATA } from "../data/seafoodData";

const KaruvaduSection = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "var(--c-bg)" }}>
      <div className="container py-lg-5">
        <div className="text-center max-w-700 mx-auto mb-5">
          <span className="letter-space-wide text-warning">
            HERITAGE SUN-DRIED
          </span>
          <h2
            className="display-5 font-serif fw-bold mt-2"
            style={{ color: "var(--c-primary)" }}
          >
            RAMESWARAM KARUVADU
          </h2>
          <p className="text-muted">Traditional Coastal Flavours</p>
          <div className="gold-line mx-auto"></div>
        </div>

        <div className="row g-3 justify-content-center">
          {KARUVADU_DATA.map((item, idx) => (
            <div className="col-6 col-md-4 col-lg-2" key={idx}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-3 text-center rounded-4 h-100 bg-white shadow-sm border border-opacity-10 d-flex flex-column justify-content-center"
              >
                <span
                  className="font-tamil fs-5 fw-bold"
                  style={{ color: "var(--c-primary)" }}
                >
                  {item.tamil}
                </span>
                <span className="small text-muted font-serif">
                  {item.english}
                </span>
              </motion.div>
            </div>
          ))}
        </div>

        <div
          className="mt-5 text-center p-4 rounded-4"
          style={{ backgroundColor: "#EDE7DA" }}
        >
          <p
            className="letter-space-wide fw-bold mb-1"
            style={{ color: "var(--c-primary)" }}
          >
            FRESH CATCH • RICH TASTE • RAMESWARAM ORIGIN
          </p>
          <small className="text-muted">
            Availability varies with the day's catch.
          </small>
        </div>
      </div>
    </section>
  );
};

export default KaruvaduSection;
