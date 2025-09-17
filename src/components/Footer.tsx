'use client';

import { useState, useRef, useEffect } from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  // ✅ Close popup when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setShowPopup(false);
      }
    }
    if (showPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showPopup]);

  return (
    <footer
      style={{
        background: "linear-gradient(90deg, #0a51a3 0%, #24a647 100%)",
        color: "#fff",
        borderTop: "2px solid #7fffd4",
      }}
    >
      <div
        style={{
          maxWidth: "1600px",
          margin: "0 auto",
          padding: "1.5rem 1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          {/* Social + SPS Icons */}
          <div style={{ display: "flex", gap: "1rem", fontSize: "2rem" }}>
            {/* IEEE SPS */}
            <a
              href="https://signalprocessingsociety.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "2rem",
                height: "2rem",
                borderRadius: "50%",
                overflow: "hidden",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-6px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <Image
                src="/IEEE_SPS_LOGO.png"
                alt="IEEE SPS"
                width={32}
                height={32}
              />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/ssn-ieee-signal-processing-society/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#7fffd4",
                transition: "all 0.3s ease",
                display: "inline-flex",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#0A66C2";
                e.currentTarget.style.transform = "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#7fffd4";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <FaLinkedin />
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@IEEESSNSPSSB"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#7fffd4",
                transition: "all 0.3s ease",
                display: "inline-flex",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#FF0000";
                e.currentTarget.style.transform = "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#7fffd4";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <FaYoutube />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/ieee_sps_ssn/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#7fffd4",
                transition: "all 0.3s ease",
                display: "inline-flex",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#E1306C";
                e.currentTarget.style.transform = "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#7fffd4";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <FaInstagram />
            </a>
          </div>

          {/* Copyright */}
          <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
            © {new Date().getFullYear()} IEEE Signal Processing Society SSN Chapter
          </p>

          {/* Developed By Popup */}
          <div style={{ position: "relative" }} ref={popupRef}>
            <button
              onClick={() => setShowPopup((v) => !v)}
              style={{
                background: "linear-gradient(135deg, #7fffd4, #24a647)",
                color: "#0A0A0A",
                border: "none",
                fontWeight: 700,
                fontSize: "0.95rem",
                borderRadius: "9999px",
                padding: "5px 18px",
                cursor: "pointer",
                boxShadow: "0 3px 12px rgba(0,0,0,0.25)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-6px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              DEVELOPED BY
            </button>
            <AnimatePresence>
              {showPopup && (
                <motion.div
                  initial={{ opacity: 0, y: -15, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.97 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    position: "absolute",
                    bottom: "110%",
                    right: 0,
                    background: "#fff",
                    color: "#0a51a3",
                    borderRadius: "15px",
                    padding: "14px 18px",
                    minWidth: "180px",
                    fontWeight: 600,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                    border: "1.5px solid #7fffd4",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 700,
                      marginBottom: 6,
                      borderBottom: "1px solid #24a647",
                      paddingBottom: 5,
                    }}
                  >
                    Web Dev Team
                  </div>
                  <div style={{ marginBottom: 3 }}>Mugilkrishna D U</div>
                  <div>Prawin Kumar S</div>
                  <div>Kushaal Shyam P</div>

                  {/* Chat bubble tail */}
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      right: "20px",
                      width: 0,
                      height: 0,
                      borderLeft: "10px solid transparent",
                      borderRight: "10px solid transparent",
                      borderTop: "10px solid #fff",
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </footer>
  );
}
