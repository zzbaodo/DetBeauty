import React from "react"
import { Container } from "react-bootstrap"
const ContactScreen = () => {
  return (
    <Container>
      <div className="d-flex flex-column align-items-center mt-5 contact-form">
        <h1 className="text-bold h1">Contact us</h1>
        <p className="h5 text-center">
          Should you have any questions, please don't hesitate to contact us. We
          really appreciate your feedback!
        </p>
        <a href="mailto:detbeautycomp@gmail.com" className="contact-form-link">
          {" "}
          Email: detbeautycomp@gmail.com
        </a>
        <a href="tel:3072202949" className="contact-form-link">
          {" "}
          Phone: (307)220-2949
        </a>
      </div>
    </Container>
  )
}

export default ContactScreen
