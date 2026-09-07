import React from "react";
import { FiPhoneCall, FiMessageCircle } from "react-icons/fi";
import { CONTACT_INFO } from "../data/seafoodData";

import ctaBg from "../assets/images/cta-bg.png";

const CTASection = () => {
  return (
    <section
      className="py-5 position-relative text-white text-center"
      style={{
        backgroundImage: `radial-gradient(circle at center, rgba(6, 43, 58, 0.88) 0%, rgba(3, 24, 32, 0.98) 100%), url(${ctaBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container py-lg-5">
        <span className="letter-space-wide text-warning">
          DISCOVER TRUE COASTAL TASTE
        </span>
        <h2 className="display-3 font-serif fw-bold mt-2">
          DON'T JUST TASTE SEAFOOD.
        </h2>
        <h3 className="display-4 font-serif fst-italic text-warning mb-4">
          TASTE THE SEA.
        </h3>

        <div className="my-4">
          <p className="fs-4 font-serif mb-1">
            AAZHI <span className="font-tamil">| ஆழி</span>
          </p>
          <p className="text-white-50 letter-space-wide">
            Rameswaram Fresh Seafood
          </p>
          <span className="badge rounded-pill bg-light text-dark px-3 py-2 fw-semibold">
            FROM OUR SEA TO YOUR HOME
          </span>
        </div>

        <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
          <a
            href={`tel:${CONTACT_INFO.phone1.replace(/\s+/g, "")}`}
            className="btn-luxury-gold"
          >
            <FiPhoneCall /> CALL NOW ({CONTACT_INFO.phone1})
          </a>
          <a
            href={`https://wa.me/91${CONTACT_INFO.phone1.replace(/\s+/g, "")}?text=${CONTACT_INFO.whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury-outline"
          >
            <FiMessageCircle /> WHATSAPP US
          </a>
        </div>

        <div className="mt-4 text-white-50">
          <small className="letter-space-wide">
            Doorstep Delivery – Chennai
          </small>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
