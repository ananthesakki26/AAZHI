import React from "react";

const founders = ["Lingeswari", "Jyothish", "Ananth"];

const About = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "var(--c-bg)" }}>
      <div className="container py-lg-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <span className="letter-space-wide text-warning">
              FOUNDATIONAL PROMISE
            </span>
            <h2
              className="display-5 font-serif fw-bold my-3"
              style={{ color: "var(--c-primary)" }}
            >
              THE SEA IS OUR SOURCE. <br />
              <span
                className="fst-italic"
                style={{ color: "var(--c-secondary)" }}
              >
                FRESHNESS IS OUR PROMISE.
              </span>
            </h2>
            <div className="gold-line mb-4"></div>
            <p className="text-muted lead" style={{ lineHeight: 1.8 }}>
              AAZHI focuses on bringing authentic Rameswaram seafood to Chennai
              customers while strictly respecting freshness, seasonal
              availability, and customer preferences.
            </p>
            <p className="text-muted" style={{ lineHeight: 1.8 }}>
              We bridge the distance between traditional Rameswaram fishermen
              and your dining table with an uncompromising commitment to
              cold-chain hygiene and personalised cuts.
            </p>
          </div>

          <div className="col-lg-6">
            <div className="p-4 p-md-5 rounded-4 shadow-sm bg-white border">
              <span className="letter-space-wide text-muted d-block mb-3">
                FOUNDED BY FRIENDS
              </span>
              <div className="row g-3">
                {founders.map((name, i) => (
                  <div className="col-12" key={i}>
                    <div className="p-3 rounded-3 bg-light d-flex align-items-center justify-content-between border">
                      <span
                        className="font-serif fw-bold fs-5"
                        style={{ color: "var(--c-primary)" }}
                      >
                        {name}
                      </span>
                      <span className="small text-muted letter-space-wide">
                        Co-Founder
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
