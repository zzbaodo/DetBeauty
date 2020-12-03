import React from "react"
import { Carousel, Image } from "react-bootstrap"

const Showcase = () => {
  return (
    <>
      <Carousel style={{ height: "auto" }} indicators={false}>
        <Carousel.Item as="div">
          <Image
            className="d-block w-100"
            src="https://vistapointe.net/images/lips-3.jpg"
            alt="First slide"
            fluid
          />
          <Carousel.Caption>
            <h3 className="carousel-caption-edit">The better you</h3>
            <p className="carousel-caption-edit">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="../../images/artist.JPG"
            alt="Third slide"
            fluid
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
      
    </>
  )
}

export default Showcase
