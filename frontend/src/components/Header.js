import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { ReactComponent as Logo } from "../images/logo.svg";

const navbar_color = {
  backgroundColor: "brown",
};

function Header(properties) {
  return (
    <Navbar style={navbar_color} varient="light" data-bs-theme="light">
      <h1
        style={{
          color: "#C8D700",
          textAlign: "center", // Text alignment
          textTransform: "uppercase", // Uppercase text
          fontSize: "2em", // Font size
        }}
      >
        Weather Station Data
      </h1>
      <Container>
        <Navbar.Brand href="/">{properties.title}</Navbar.Brand>
        <Logo style={{ maxWidth: "15rem", maxHeight: "7rem" }} />
      </Container>
    </Navbar>
  );
}

export default Header;
