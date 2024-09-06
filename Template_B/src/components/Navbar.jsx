import React from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Navbars() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Row className="w-100 align-items-center">
          <Col >
            <Navbar.Brand href="#">NIKE</Navbar.Brand>
          </Col>
          <Col xs={6} md={6}>
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">MENU</Nav.Link>
                <Nav.Link href="#action2">LOCATION</Nav.Link>
                <Nav.Link href="#action3">ABOUT</Nav.Link>
                <Nav.Link href="#action4">CONTACT</Nav.Link>
              </Nav>
              {/* Login Button for Small Screens (hidden on large screens) */}
              <Button variant="outline-danger" className="d-lg-none mt-2">
                Login
              </Button>
            </Navbar.Collapse>
          </Col>
          <Col className="text-end">
            {/* Login Button for Large Screens (hidden on small screens) */}
            <Button variant="outline-danger" className="d-none d-lg-inline me-2">
              Login
            </Button>
            <Navbar.Toggle aria-controls="navbarScroll" />
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Navbars;
