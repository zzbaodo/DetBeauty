import React, { useState } from "react"
import { Form, Container } from "react-bootstrap"
import firebase from "../firebase"
import InfoIcon from "@material-ui/icons/Info"
const ScheduleScreen = () => {
  const db = firebase.firestore()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const onSubmitHandler = async (e) => {
    e.preventDefault()
    const data = {
      name,
      email,
      message,
    }
    const res = await db.collection("appointment").doc(email).set(data)
    if (res) {
      console.log("success")
    } else {
      console.log("failed")
    }
    console.log("submit!")
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

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Services</Form.Label>
          <Form.Control as="select">
            <option>Ombre Powder Brows</option>
            <option>Baby Lip Lush</option>
            <option>Dark Lip Revitalization</option>
            <option>Restorative Lip Blush</option>
            <option>Lash Line Enhancement</option>
            <option>Classic Liner</option>
            <option>Smokey Liner</option>
          </Form.Control>
          <div style={{ display: "flex", alignContent: "center", fontSize:'12px' }}>
            <InfoIcon style={{ fill: "#d4d4d4" }} />
            <p className="d-block">
              Note: If you would like to schedule for multiple services per
              visit, please contact us via our email:{" "}
              <a href="mailto:detbeautycomp@gmail.com" style={{textDecoration:'underline'}}>
                detbeautycomp@gmail.com
              </a>
            </p>
          </div>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Additional Comments</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Optional"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>
      </Form>
    </div>
  )
}

export default ScheduleScreen
