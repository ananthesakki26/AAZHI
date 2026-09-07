import React from "react";
import { motion } from "framer-motion";
import { FiAnchor, FiAward, FiScissors, FiTruck } from "react-icons/fi";

const PreBookSection = () => {
  const cards = [
    {
      num: "01",
      title: "FRESH CATCH",
      desc: "Enjoy seafood sourced from the waters of Rameswaram.",
      icon: <FiAnchor size={28} />,
    },
    {
      num: "02",
      title: "THE RAMESWARAM DIFFERENCE",
      desc: "The natural taste and texture of open-sea seafood is something seafood lovers can truly appreciate.",
      icon: <FiAward size={28} />,
    },
    {
      num: "03",
      title: "YOUR WAY",
      desc: "Cleaned or Uncleaned — You Choose.",
      icon: <FiScissors size={28} />,
    },
    {
      num: "04",
      title: "DOORSTEP DELIVERY",
      desc: "From the Rameswaram coast to your home in Chennai.",
      icon: <FiTruck size={28} />,
    },
  ];

  return (
    <section
      className="py-5 text-white"
      style={{ backgroundColor: "var(--c-dark)" }}
    >
      <div className="container py-lg-5">
        <div className="row justify-content-between align-items-end mb-5">
          <div className="col-lg-7">
            <span className="letter-space-wide text-warning">
              ORDER PROTOCOL
            </span>
            <h2 className="display-5 font-serif fw-bold mt-2">
              YOU ORDER. <br />
              <span className="fst-italic" style={{ color: "var(--c-subtle)" }}>
                WE BRING THE CATCH.
              </span>
            </h2>
            <h3 className="fs-5 text-white-50 mt-2">WHY PRE-BOOK?</h3>
          </div>
          <div className="col-lg-5 text-lg-end mt-3 mt-lg-0">
            <div
              className="p-3 rounded-4 border border-warning"
              style={{ backgroundColor: "rgba(201, 154, 74, 0.1)" }}
            >
              <span className="fw-bold d-block text-warning letter-space-wide">
                2 DAYS PRIOR PRE-BOOKING IS APPRECIATED
              </span>
            </div>
          </div>
        </div>

        <p className="lead text-white-50 mb-5" style={{ maxWidth: "850px" }}>
          Your advance order helps us plan your requirement with the fresh catch
          from Rameswaram and bring it to your doorstep in Chennai.
        </p>

        <div className="row g-4">
          {cards.map((c, i) => (
            <div className="col-md-6 col-lg-3" key={i}>
              <motion.div
                whileHover={{ translateY: -6 }}
                className="p-4 rounded-4 h-100 d-flex flex-column justify-content-between"
                style={{
                  backgroundColor: "var(--c-primary)",
                  border: "1px solid rgba(127, 183, 179, 0.15)",
                }}
              >
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-4 text-warning">
                    <span className="display-6 font-serif fw-bold opacity-50">
                      {c.num}
                    </span>
                    <div>{c.icon}</div>
                  </div>
                  <h4 className="fs-6 letter-space-wide text-white mb-2">
                    {c.title}
                  </h4>
                  <p className="text-white-50 small mb-0">{c.desc}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreBookSection;
