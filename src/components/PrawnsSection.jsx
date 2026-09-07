import React from "react";
import { motion } from "framer-motion";
import { PRAWNS_DATA } from "../data/seafoodData";

const PrawnsSection = () => {
  return (
    <section
      className="py-5 position-relative text-white"
      style={{ backgroundColor: "var(--c-dark)" }}
    >
      <div className="container py-lg-4">
        <div className="text-center mb-5">
          <span className="letter-space-wide text-warning">
            WILD OCEAN HARVEST
          </span>
          <h2 className="display-5 font-serif fw-bold mt-2">
            PRAWNS{" "}
            <span className="font-tamil fw-normal text-warning">| இறால்</span>
          </h2>
          <p className="text-white-50">
            Naturally harvested from the open ocean current.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {PRAWNS_DATA.map((prawn, idx) => (
            <div className="col-lg-4 col-md-6" key={idx}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
                className="h-100 rounded-4 p-3"
                style={{
                  background: "rgba(6, 43, 58, 0.6)",
                  border: "1px solid rgba(201, 154, 74, 0.25)",
                }}
              >
                <div
                  className="rounded-3 overflow-hidden mb-3"
                  style={{ height: "240px" }}
                >
                  <img
                    src={prawn.img}
                    alt={prawn.english}
                    className="w-100 h-100 object-fit-cover"
                    loading="lazy"
                  />
                </div>
                <div className="px-2">
                  <h3 className="font-tamil fs-4 text-warning mb-1">
                    {prawn.tamil}
                  </h3>
                  <h4 className="fs-5 font-serif text-white mb-2">
                    {prawn.english}
                  </h4>
                  <p className="text-white-50 small mb-3">{prawn.desc}</p>
                  <span className="badge bg-secondary-subtle text-dark-emphasis px-3 py-2 rounded-pill">
                    Availability: Today's Catch
                  </span>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrawnsSection;
