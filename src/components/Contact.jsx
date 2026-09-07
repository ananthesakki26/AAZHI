import React from "react";
import { FiPhoneCall, FiMessageCircle, FiMapPin } from "react-icons/fi";
import { CONTACT_INFO } from "../data/seafoodData";

const Contact = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container py-lg-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <span className="letter-space-wide text-warning">
              DIRECT COASTAL LINE
            </span>
            <h2
              className="display-5 font-serif fw-bold mt-2 mb-4"
              style={{ color: "var(--c-primary)" }}
            >
              READY FOR THE NEXT CATCH?
            </h2>
            <div className="gold-line mx-auto mb-5"></div>

            <div className="row g-4 mb-5">
              <div className="col-md-6">
                <div className="p-4 rounded-4 bg-light border h-100">
                  <FiPhoneCall size={32} className="text-warning mb-3" />
                  <h3 className="fs-6 letter-space-wide text-muted mb-2">
                    CALL / WHATSAPP
                  </h3>
                  <a
                    href={`tel:${CONTACT_INFO.phone1.replace(/\s+/g, "")}`}
                    className="d-block fs-4 font-serif fw-bold text-decoration-none"
                    style={{ color: "var(--c-primary)" }}
                  >
                    {CONTACT_INFO.phone1}
                  </a>
                  <a
                    href={`tel:${CONTACT_INFO.phone2.replace(/\s+/g, "")}`}
                    className="d-block fs-4 font-serif fw-bold text-decoration-none"
                    style={{ color: "var(--c-primary)" }}
                  >
                    {CONTACT_INFO.phone2}
                  </a>
                </div>
              </div>

              <div className="col-md-6">
                <div className="p-4 rounded-4 bg-light border h-100">
                  <FiMapPin size={32} className="text-warning mb-3" />
                  <h3 className="fs-6 letter-space-wide text-muted mb-2">
                    DELIVERY REGION
                  </h3>
                  <p
                    className="fs-4 font-serif fw-bold mb-2"
                    style={{ color: "var(--c-primary)" }}
                  >
                    Doorstep Delivery
                  </p>
                  <span className="badge rounded-pill bg-dark text-white px-3 py-2">
                    Chennai Metropolitan
                  </span>
                </div>
              </div>
            </div>

            <div className="d-flex flex-wrap justify-content-center gap-3">
              <a
                href={`tel:${CONTACT_INFO.phone1.replace(/\s+/g, "")}`}
                className="btn-luxury-gold"
              >
                <FiPhoneCall /> CALL NOW
              </a>
              <a
                href={`https://wa.me/91${CONTACT_INFO.phone1.replace(/\s+/g, "")}?text=${CONTACT_INFO.whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-outline"
                style={{
                  backgroundColor: "var(--c-secondary)",
                  borderColor: "var(--c-secondary)",
                }}
              >
                <FiMessageCircle /> WHATSAPP NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
