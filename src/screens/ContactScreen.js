import React from "react"
import { Container } from "react-bootstrap"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import RoomIcon from "@material-ui/icons/Room"
import PhoneIcon from "@material-ui/icons/Phone"
const ContactScreen = () => {
  return (
    <Container>
      <div className="d-flex flex-column align-items-center mt-5 contact-form">
        <h1 className="text-bold h1">Contact us</h1>
        <p className="h5 text-center">
          Should you have any questions, please don't hesitate to contact us. We
          really appreciate your feedback!
        </p>
        <div className="contact-container">
          <RoomIcon />
          <div>
            {" "}
            <a
              href="https://www.google.com/maps/place/Seattle+Beauty+Academy/@47.5734758,-122.2963927,17z/data=!3m1!4b1!4m5!3m4!1s0x54906a65a974abc9:0xb9f7c2204437f9d3!8m2!3d47.5734758!4d-122.294204"
              className="contact-form-link"
            >
              Address: Seattle Beauty Academy
            </a>{" "}
          </div>
        </div>
        <div className="contact-container">
          <MailOutlineIcon />
          <div>
            {" "}
            <a
              href="mailto:detbeautycomp@gmail.com"
              className="contact-form-link"
            >
              Email: detbeautycomp@gmail.com
            </a>{" "}
          </div>
        </div>
        <div className="contact-container">
          <PhoneIcon />
          <div>
            {" "}
            <a href="tel:3072202949" className="contact-form-link">
              Phone: (307)220-2949
            </a>{" "}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ContactScreen
