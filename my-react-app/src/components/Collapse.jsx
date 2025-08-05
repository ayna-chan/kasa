import { useState, useRef } from "react";
import "../styles/_collapse.scss";

export default function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className={`collapse ${isOpen ? "open" : ""}`}>
      <div className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
        <h2 className="collapse__title">{title}</h2>
        <span className={`collapse__arrow ${isOpen ? "rotated" : ""}`} />
      </div>
      <div
        className="collapse__content"
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <div className="collapse__text">{children}</div>
      </div>
    </div>
  );
}
