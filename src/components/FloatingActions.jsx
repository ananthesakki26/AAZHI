import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { CONTACT_INFO } from "../data/seafoodData";

const FloatingActions = () => {
  return (
    <div
      className="position-fixed d-flex flex-column gap-3 align-items-center"
      style={{ bottom: "28px", right: "28px", zIndex: 999 }}
    >
      {/* Floating Call Button - Visible on all screens */}
      <a
        href={`tel:${CONTACT_INFO.phone1.replace(/\s+/g, "")}`}
        className="btn rounded-circle text-white shadow-lg d-flex align-items-center justify-content-center text-decoration-none"
        style={{
          width: "52px",
          height: "52px",
          backgroundColor: "var(--c-primary, #062B3A)",
          border: "2px solid var(--c-accent, #C99A4A)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.08)";
          e.currentTarget.style.boxShadow = "0 10px 25px rgba(6, 43, 58, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "";
        }}
        aria-label="Call Seafood Desk"
        title="Call Us Directly"
      >
        <FiPhoneCall size={22} style={{ color: "var(--c-accent, #C99A4A)" }} />
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/91${CONTACT_INFO.phone1.replace(/\s+/g, "")}?text=${CONTACT_INFO.whatsappText}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn rounded-circle text-white shadow-lg d-flex align-items-center justify-content-center text-decoration-none"
        style={{
          width: "54px",
          height: "54px",
          backgroundColor: "#25D366",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.08)";
          e.currentTarget.style.boxShadow =
            "0 10px 25px rgba(37, 211, 102, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "";
        }}
        aria-label="WhatsApp Pre-Book"
        title="Pre-Book via WhatsApp"
      >
        <FaWhatsapp size={30} />
      </a>
    </div>
  );
};

export default FloatingActions;
