import React from "react";
import { Navbar, Container } from "react-bootstrap";

const navbar_color = {
  backgroundColor: "lightyellow",
};

function Header(properties) {
  return (
    <Navbar style={navbar_color} varient="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="/">{properties.title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
