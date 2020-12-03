import React from "react"
import { Row, Col, Container, Card, Button } from "react-bootstrap"

const PortfolioScreen = () => {
  return (
    <Container fluid="xl">
      <Row>
        <Col sm={12} md={4}>
          <Card
            style={{ minWidth: "15rem", maxWidth: "18rem", margin: "0 auto" }}
          >
            <Card.Img
              variant="top"
              src="../../images/brow.jpg"
              style={{ height: "17.5rem" }}
            />
            <Card.Body>
              <Card.Title>Ombre Powder Brows</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary" className="btn-block">
                View More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card
            style={{ minWidth: "15rem", maxWidth: "18rem", margin: "0 auto" }}
          >
            <Card.Img variant="top" src="../../images/lip.jpg" />
            <Card.Body>
              <Card.Title>Lip Blush</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary" className="btn-block">
                View More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card
            style={{ minWidth: "15rem", maxWidth: "18rem", margin: "0 auto" }}
          >
            <Card.Img variant="top" src="../../images/eyeliner.jpg" />
            <Card.Body>
              <Card.Title>Eyeliner</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary" className="btn-block">
                View More
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default PortfolioScreen
