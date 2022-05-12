import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import emc from "../../src/emc.jpg";

import emcpick from "../../src/emcpick.png";

function NavbarPage() {
  // align-items: center;
  // text-decoration: none;
  // padding: 0 1rem;
  // height: 100%;
  // cursor: pointer;
  return (
    <div>
      <Navbar bg="light" variant="light">
        <img src={emcpick} alt="" />
        <Container bg="" variant="">
          <Nav className="me-auto">
            <Nav.Link to="/about">ABOUT US</Nav.Link>

            <Nav.Link href="/servics">SERVICS</Nav.Link>

            <Nav.Link href="/contact">PORTFOLIO</Nav.Link>
            <Nav.Link href="/contact">CAREER</Nav.Link>
            <Nav.Link href="/contact">BLOG</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <img src={emc} alt="" /> */}
    </div>
  );
}

export default NavbarPage;
