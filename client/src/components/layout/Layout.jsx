import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <p>Este es el header</p>
      {children}
      <p>Este es el footer</p>
    </>
  );
}
