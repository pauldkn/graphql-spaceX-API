import React from "react";
import logo from "../logo.png";

export default function Header() {
  return (
    <header>
      <img
        src={logo}
        alt="SpaceX"
        style={{ width: 300, display: "block", margin: "auto" }}
      />
    </header>
  );
}
