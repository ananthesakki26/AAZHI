import React from "react";
import { motion } from "framer-motion";

import crabImg from "../assets/images/seafood/crab.png";

const CrabSection = () => {
  return (
    <section
      className="py-5 overflow-hidden position-relative"
      style={{ backgroundColor: "var(--c-primary)", color: "#FFFFFF" }}
    >
      <div className="container py-lg-4">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={crabImg}
                alt="Blue Spotted Crab - நண்டு"
                className="img-fluid rounded-4 shadow-lg w-100"
                style={{ maxHeight: "460px", objectFit: "cover" }}
                loading="lazy"
              />
            </motion.div>
          </div>

          <div className="col-lg-6">
            <span className="letter-space-wide text-warning">
              COASTAL CRUSTACEANS
            </span>
            <h2 className="display-5 font-serif fw-bold my-3">
              CRAB{" "}
              <span className="font-tamil fw-normal text-warning">| நண்டு</span>
            </h2>
            <div className="gold-line mb-4"></div>
            <p className="lead text-white-50 mb-4" style={{ lineHeight: 1.8 }}>
              Wild ocean crabs caught along natural coral reefs. Enjoy rich,
              sweet and succulent crab meat delivered fresh.
            </p>

            <ul className="list-unstyled text-white d-flex flex-column gap-3 mb-4">
              <li className="d-flex align-items-center gap-3">
                <span className="badge rounded-circle p-2 bg-warning"></span>
                <span>
                  <strong>Blue Spotted Crab:</strong> Signature delicacy with
                  sweet, dense white meat.
                </span>
              </li>
              <li className="d-flex align-items-center gap-3">
                <span className="badge rounded-circle p-2 bg-warning"></span>
                <span>
                  <strong>Sea Crab:</strong> Plump wild sea crabs sourced
                  directly from local boats.
                </span>
              </li>
              <li className="d-flex align-items-center gap-3">
                <span className="badge rounded-circle p-2 bg-warning"></span>
                <span>
                  <strong>Seasonal Crab Varieties:</strong> Depending on moon
                  cycle and open waters.
                </span>
              </li>
            </ul>

            <span className="badge border border-warning text-warning px-3 py-2 rounded-pill">
              Availability: Today's Catch & Seasonal
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrabSection;
