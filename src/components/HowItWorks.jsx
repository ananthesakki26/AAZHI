import React from "react";

const steps = [
  {
    num: "01",
    title: "PRE-BOOK",
    desc: "Choose your seafood and place your order.",
  },
  {
    num: "02",
    title: "WE BRING THE CATCH",
    desc: "Your order is planned with the fresh Rameswaram catch.",
  },
  {
    num: "03",
    title: "PREPARE YOUR WAY",
    desc: "Choose cleaned or uncleaned.",
  },
  {
    num: "04",
    title: "DELIVER TO YOUR DOOR",
    desc: "Your seafood arrives at your doorstep in Chennai.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container py-lg-4">
        <div className="text-center max-w-700 mx-auto mb-5">
          <span className="letter-space-wide text-warning">
            SEAMLESS LOGISTICS
          </span>
          <h2
            className="display-5 font-serif fw-bold mt-2"
            style={{ color: "var(--c-primary)" }}
          >
            HOW IT WORKS
          </h2>
          <div className="gold-line mx-auto"></div>
        </div>

        <div className="row g-4 position-relative">
          {steps.map((st, idx) => (
            <div className="col-lg-3 col-md-6 text-center" key={idx}>
              <div className="p-4 rounded-4 h-100 bg-light border border-light-subtle position-relative">
                <div
                  className="rounded-circle bg-white shadow-sm d-flex align-items-center justify-content-center mx-auto mb-3 font-serif fw-bold"
                  style={{
                    width: "60px",
                    height: "60px",
                    color: "var(--c-accent)",
                    fontSize: "1.25rem",
                  }}
                >
                  {st.num}
                </div>
                <h3
                  className="fs-6 letter-space-wide fw-bold mb-2"
                  style={{ color: "var(--c-primary)" }}
                >
                  {st.title}
                </h3>
                <p className="text-muted small mb-0">{st.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
