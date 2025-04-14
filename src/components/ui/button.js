import React from "react";

export function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "#007bff",
        color: "white",
        padding: "10px 16px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
      className={className}
    >
      {children}
    </button>
  );
}
