import { useState, useRef } from "react";
import "../component/collapse.css";

export default function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  // Vérification & écoute ouvert/fermé //
    // Déroulé du collapse //
  return (
    <div className="collapse">
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="collapse-title">{title}</h3>
        <span className={`collapse-arrow ${isOpen ? "open" : ""}`}>⌃</span>
      </div>

      <div
        ref={contentRef}
        className={`collapse-content-wrapper ${isOpen ? "open" : ""}`}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <div className="collapse-content">
          {<p>{content}</p>}
        </div>
      </div>
    </div>
  );
}