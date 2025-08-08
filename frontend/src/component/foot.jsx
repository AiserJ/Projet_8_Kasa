import React from "react";
import "../component/foot.css";
import logo from "../assets/logo_kasa.png";

export default function Foot() {
  return (
    <footer className="footer">
      <img src={logo} alt="Kasa logo" className="footer-logo" />
      <p className="footer-text">© 2025 Kasa. All rights reserved</p>
    </footer>
  );
}