import React  from "react"
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Container,
  Image,
  Accordion,
} from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

const Header = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          {/* <Row>
            <Col xs={8} lg={2}> */}
          <LinkContainer to="/home">
            <Navbar.Brand style={{ fontSize: "40px" }}>
              <Image
                src="../../images/logo.png"
                fluid
                style={{ width: "70px" }}
              />
              Beauty
            </Navbar.Brand>
          </LinkContainer>
          {/* </Col> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/home">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <NavDropdown title="Services" id="services-dropdown">
                <LinkContainer to="/services/brows">
                  <p className="text-center services-ombre h5 p-3">
                    {" "}
                    Ombre Powder Brows
                  </p>
                </LinkContainer>

                <Accordion>
                  <Accordion.Toggle
                    as="p"
                    eventKey="0"
                    className="text-center services-accordion h5 p-3 mb-2"
                    style={{ fontSize: "15px", padding: "10px", margin: "0" }}
                  >
                    Lip Blush {"   "}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <>
                      <Button className="d-block w-100 btn-light">
                        Baby Lip Blush
                      </Button>
                      <Button className="d-block w-100 btn-light">
                        Dark Lip Revitalization
                      </Button>
                      <Button className="d-block w-100 btn-light">
                        Restorative Lip Blush
                      </Button>
                    </>
                  </Accordion.Collapse>
                  <Accordion.Toggle
                    as="p"
                    eventKey="1"
                    className="text-center services-accordion h5 p-3 "
                    style={{ fontSize: "15px", padding: "10px", margin: "0" }}
                  >
                    Eye Liner {"   "}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <>
                      <Button className="d-block w-100 btn-light">
                        Lash Line Enhancement
                      </Button>
                      <Button className="d-block w-100 btn-light">
                        Classic Liner
                      </Button>
                      <Button className="d-block w-100 btn-light">
                        Smokey Liner
                      </Button>
                    </>
                  </Accordion.Collapse>
                </Accordion>
              </NavDropdown>
              <LinkContainer to="/booking">
                <Nav.Link>Booking</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>

              <NavDropdown title="More" id="more-dropdown" variant="dark">
                <LinkContainer to="/info">
                  <NavDropdown.Item>
                    <p className="text-center services-ombre h5 p-3"> Info</p>
                  </NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="/faq">
                  <NavDropdown.Item>
                    <p className="text-center services-ombre h5 p-3"> FAQ's</p>
                  </NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="/policies">
                  <NavDropdown.Item>
                    <p className="text-center services-ombre h5 p-3 w-100">
                      {" "}
                      Policies
                    </p>
                  </NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="/portfolio">
                  <NavDropdown.Item>
                    <p className="text-center services-ombre h5 p-3">
                      {" "}
                      Portfolio
                    </p>
                  </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
            {/* <Form inline >
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2 bt-search-box"
              />
              <Button variant="primary">Search</Button>
            </Form> */}
          </Navbar.Collapse>
          {/* </Row> */}
        </Container>
      </Navbar>
    </>
  )
}

export default Header
