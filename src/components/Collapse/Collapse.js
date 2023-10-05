import React, { useState } from "react";
import "./Collapse.css";

function Collapse({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <label
        htmlFor="menu1"
        onClick={() => setIsOpen(!isOpen)}
        className="menu-button"
      >
        {title}
      </label>
      {isOpen && description}
    </div>
  );
}
export default Collapse;
