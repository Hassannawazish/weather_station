import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
      <Navbar bg="light" data-bs-theme="light">
          <Navbar.Brand href="/">Weather Station</Navbar.Brand>
      </Navbar>
  );
}

export default Header;
