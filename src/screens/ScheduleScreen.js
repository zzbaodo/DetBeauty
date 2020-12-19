import React, { useState } from "react"
import firebase from "../firebase"
const ScheduleScreen = () => {
  const db = firebase.firestore()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
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
    <div>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="name">
          <input
            value={name}
            name="name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          <input
            value={email}
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="message">
          <textarea
            value={message}
            name="message"
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default ScheduleScreen
