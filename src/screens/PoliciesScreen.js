import React from "react"
import { Card, Accordion} from "react-bootstrap"

const PoliciesScreen = () => {
  return (
    <>
      <div className="mx-3 mt-3 mission-statement p-3">
        <p className="h1">Our Mission:</p>
        <p className="text-muted">To our customers:</p>
        <p>
          At <span className="shop-title"> DET Beauty</span>, we are committed
          to provide the best possible experience for our clients. It is our
          very responsibility to make sure that all aspects of the procedures
          are clear to you, such that anything left unaddressed should be
          notified to us immediately. Your participation and compliance to the
          conditions for receiving a procedure is absolutely essential to us,
          and also to your satisfaction.
        </p>
      </div>

      <Accordion className="mt-5 px-3">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <p style={{ fontSize: "2rem" }}> Deposits</p>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              A $50 Non-Refundable deposit is required for all services at DET
              Beauty. This will apply toward the total cost of your appointment.
              Please understand that a deposit is there to ensure that you are
              committed to your appointment, and allows us to dedicate this time
              slot just for you. Deposit can be transferred to a different day,
              granted that the appointment is being rescheduled two days prior
              to the actual date of the appointment.
              <br />
              Upon your arrival at the appointment, if there are conflicting
              issues to the procedure due to you not having fully read, and
              understood the information listed in the Info, FQAs, and Policies,
              then your appointment will be canceled. Another deposit is
              required to make another appointment.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <p style={{ fontSize: "2rem" }}> Rescheduling</p>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              {" "}
              We kindly ask that you give us a two days notice to reschedule
              your appointment, in order for your deposit to be transferred to a
              different date. You may reschedule your appointment only one time
              before your deposit will be forfeited. Note that promotional rates
              may change depending on the date of your new appointment.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            <p style={{ fontSize: "2rem" }}> Cancellations</p>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              {" "}
              Please give us a week of notice to cancel your appointment. If you
              cancel your appointment during the one week frame, your deposit
              will be forfeited and no refund will be issued. This is to ensure
              that clients in our waiting list will not miss any opportunities
              to receive services at DET Beauty.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="3">
            <p style={{ fontSize: "2rem" }}> Late Arrivals</p>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              {" "}
              We understand that things happened, such that you cannot arrive at
              your appointment on time. You will have a 15 minutes window. After
              this, we must reschedule your appointment and another deposit will
              be required to book for another appointment. The integrity of
              permanent make-up services required that no rushing can be made.
              Ultimately, a reschedule will be more worthwhile than forcing us
              to accept you. This discretion is made solely for your benefit.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="4">
            <p style={{ fontSize: "2rem" }}> No Show</p>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type sp
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="5">
            <p style={{ fontSize: "2rem" }}> Results</p>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type sp
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="9">
            <p style={{ fontSize: "2rem" }}> Touch-ups</p>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="9">
            <Card.Body>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type sp
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="6">
            <p style={{ fontSize: "2rem" }}> Cover up Previous Works</p>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="6">
            <Card.Body>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type sp
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="7">
            <p style={{ fontSize: "2rem" }}> Refund</p>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="7">
            <Card.Body>
              Refunds are not available under any circumstances at DET Beauty.
              We will not proceed with the service unless both the color and
              shape are approved by you. It is important that you also
              understand the inherent uncertainty in the outcomes of permanent
              makeup, as each clients’ skin anatomy is different. Because of
              this reason, refunds are unavailable.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="8">
            <p style={{ fontSize: "2rem" }}> Payment Methods</p>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="8">
            <Card.Body>
              {" "}
              At the moment, we could only accept cash. Sorry for the
              inconvenience this may have caused you.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  )
}

export default PoliciesScreen
