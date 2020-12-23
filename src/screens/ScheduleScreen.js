import React, { useState, useEffect, useContext } from "react"
import {
  Form,
  Button,
  Alert,
  InputGroup,
  FormControl,
  Row,
  Col,
} from "react-bootstrap"
import InfoIcon from "@material-ui/icons/Info"
import CentralContext from "../context/centralContext"
import MultiStepHeader from "../components/MultiStepHeader"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import moment from "moment"
// import firebase from "../firebase"
import TimeSlot from "../components/TimeSlot"
const ScheduleScreen = ({ history }) => {
  const centralContext = useContext(CentralContext)
  const { user, selectService, setDate } = centralContext
  const [service, setService] = useState("empty")
  const [price, setPrice] = useState("")
  const [alert, setAlert] = useState(false)
  const [value, onChange] = useState(user.date ? user.date : new Date())
  const [time, setTime] = useState("")
 

  const priceList = {
    BLL: 350,
    DLR: 380,
    RLB: 380,
    LLE: 320,
    CL: 350,
    SL: 380,
    OPB: 380,
  }

  useEffect(() => {
    const timeConverted = moment(value).unix()
    setTime(timeConverted)
    setDate(value)
    // eslint-disable-next-line
  }, [value])
  useEffect(() => {
    setPrice(priceList[service])
    setService(user.service)
    // eslint-disable-next-line
  }, [service, user])
  const onSubmitHandler = async (e) => {
    e.preventDefault()
    if (service === "empty") {
      setAlert("Please select a service")
    } else if (!user.time) {
      setAlert("Please select a date and time for your appointment")
    } else {
      history.push("/consentform")
    }
  }
  return (
    <>
      <MultiStepHeader
        firstStep
        secondStep={
          user.service !== "empty"
            ? ["available", "inactive"]
            : ["unavailable", "inactive"]
        }
        thirdStep="inactive"
      />
      <div className="scheduleForm-container">
        <Form>
          {alert && <Alert variant="danger">{alert}</Alert>}
          <Form.Group controlId="exampleForm.ControlSelect1" className="my-0">
            <Form.Label style={{ fontWeight: "900" }}>Services:</Form.Label>
            <Form.Control
              as="select"
              value={service}
              onChange={(e) => {
                selectService(e.target.value)
                setService(e.target.value)
              }}
            >
              <option value="empty">--Select a service--</option>
              <option value="OPB">Ombre Powder Brows</option>
              <option value="BLL">Baby Lip Lush</option>
              <option value="DLR">Dark Lip Revitalization</option>
              <option value="RLB">Restorative Lip Blush</option>
              <option value="LLE">Lash Line Enhancement</option>
              <option value="CL">Classic Liner</option>
              <option value="SL">Smokey Liner</option>
            </Form.Control>
            <div
              style={{
                display: "flex",
                alignContent: "center",
                fontSize: "12px",
                marginTop: "5px",
              }}
            >
              <InfoIcon
                style={{ fill: "#d4d4d4", fontSize: "15px", marginTop: "1px" }}
              />
              <p className="d-block" style={{}}>
                Note: If you would like to schedule for multiple services per
                visit, please contact us via our email:{" "}
                <a
                  href="mailto:detbeautycomp@gmail.com"
                  style={{ textDecoration: "underline" }}
                >
                  detbeautycomp@gmail.com
                </a>
              </p>
            </div>
          </Form.Group>
          <Form.Group>
            <Form.Label style={{ fontWeight: "900" }}>Price:</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>$</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                style={{ backgroundColor: "#f7f7f9" }}
                id="inlineFormInputGroupUsername"
                placeholder={price}
                readOnly
              />
            </InputGroup>
          </Form.Group>
          <Form.Label style={{ fontWeight: "900" }}>Select a date:</Form.Label>
          <Row className="mb-3">
            <Col md={8} sm={12}>
              <div className="calendar-container">
                <Calendar
                  onChange={onChange}
                  defaultValue={user.date ? user.date : value}
                />
              </div>
            </Col>
            <Col md={4} sm={12} className="mt-2">
              <TimeSlot time={time} />
            </Col>
          </Row>
          <Button block disabled={!user.service} onClick={onSubmitHandler}>
            Continue
          </Button>
        </Form>
        <br />
      </div>
    </>
  )
}

export default ScheduleScreen
