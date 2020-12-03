import React, { useState } from "react"
import { Image, Form, Button, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const BookingScreen = () => {
  const [agree, setAgree] = useState(false)
  return (
    <>
      <img
        src="https://irp-cdn.multiscreensite.com/e5100667/dms3rep/multi/cos+tat+page+feathering.jpg"
        className="booking-image"
        
      />
      <Container>
        <h2 className='mt-5'>Agreement</h2>

        <Form>
          <p>
            By booking an appointment, I agree that I have fully read and
            understood the information listed in the{" "}
            <Link
              to="/info"
              style={{ textDecoration: "underline", fontWeight: "900" }}
            >
              Info
            </Link>
            ,{" "}
            <Link
              to="/FAQ"
              style={{ textDecoration: "underline", fontWeight: "900" }}
            >
              FAQ's,
            </Link>{" "}
            and{" "}
            <Link
              to="/policies"
              style={{ textDecoration: "underline", fontWeight: "900" }}
            >
              Policies
            </Link>{" "}
            sections. Refunds, including deposits, are not available under any
            circumstances.
          </p>
          <div className="d-flex align-items-center flex-column">
            <Form.Check
              type="checkbox"
              id="agree"
              value={agree}
              checked={agree}
              label="I Agree"
              onChange={(e) => {
                setAgree(!agree)
              }}
            />

            <Link to="/scheduleapp">
              <Button disabled={!agree} className="mr-auto  my-3">
                Book An Appointment
              </Button>
            </Link>
          </div>
        </Form>
      </Container>
    </>
  )
}

export default BookingScreen
