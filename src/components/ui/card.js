import React from "react";

export function Card({ children }) {
  return <div style={{ border: "1px solid #ddd", padding: "16px", borderRadius: "8px", boxShadow: "2px 2px 5px rgba(0,0,0,0.1)" }}>{children}</div>;
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}
