import React, { useState, useEffect } from "react"
import { Form, Button, Alert, InputGroup, FormControl } from "react-bootstrap"
import InfoIcon from "@material-ui/icons/Info"
const ScheduleScreen = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [service, setService] = useState("null")
  const [price, setPrice] = useState("null")
  const [alert, setAlert] = useState(false)

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
    setPrice(priceList[service])
    // eslint-disable-next-line
  }, [service])
  const onSubmitHandler = async (e) => {
    e.preventDefault()
    if (service === "null") {
      setAlert("Please select a service")
    }
    console.log("clicked")
  }
  return (
    <div className="scheduleForm-container">
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput2">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="number"
            placeholder="xxx-xxx-xxxx"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
        {alert && <Alert variant="danger">{alert}</Alert>}
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Services</Form.Label>
          <Form.Control
            as="select"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="null">--Select a service--</option>
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
          <Form.Label>Total:</Form.Label>
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
       

        <Button onClick={onSubmitHandler}>Submit</Button>
      </Form>
    </div>
  )
}

export default ScheduleScreen
