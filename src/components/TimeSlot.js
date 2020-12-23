import React, { useState, useEffect, useContext } from "react"
import firebase from "../firebase"
import { Form } from "react-bootstrap"
import CentralContext from "../context/centralContext"

const db = firebase.firestore()

const TimeSlot = ({ time }) => {
  const centralContext = useContext(CentralContext)
  const { setTime, user } = centralContext
  const [timeArr, setTimeArr] = useState([])

  const [selectedOption, setSelectedOption] = useState(null)
  const getData = async () => {
    const appRef = db.collection("appointment")
    try {
      const timeArray = []
      const appData = await appRef.where("date", "==", time).get()
      appData.forEach((doc) => {
        timeArray.push(doc.data())
      })
      const timeAt9AM = time + 32400
      const timeAt1PM = time + 46800
      const timeAt5PM = time + 61200
      const times = [timeAt9AM, timeAt1PM, timeAt5PM]
      timeArray.forEach((item) => {
        if (
          item.appTime === timeAt9AM ||
          item.appTime === timeAt1PM ||
          item.appTime === timeAt5PM
        ) {
          const index = times.indexOf(item.appTime)
          times.splice(index, 1)
        }
      })
      const displayTimes = times.map((time) => {
        if (time === timeAt9AM) {
          return "9 AM"
        } else if (time === timeAt1PM) {
          return "1 PM"
        } else if (time === timeAt5PM) {
          return "5 PM"
        }
        return setTimeArr(displayTimes)
      })
      setTimeArr(displayTimes)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(()=>{
    setSelectedOption(user.time)
  },[user.time])
  useEffect(() => {
    getData()
    if (selectedOption) {
      setTime(selectedOption)
    }
    // eslint-disable-next-line
  }, [time, user.date])
 

  //   const onSubmitHandler = (e) => {
  //     e.preventDefault()
  //     const data = {
  //       date: time,
  //       appTime: time + 3600,
  //       createdAt: Math.floor(Date.now() / 1000),
  //     }
  //     try {
  //       db.collection("appointment").doc().set(data)
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }
  return (
    <div className="timeSlot">
      <div>
        <Form.Label style={{ fontWeight: "900" }}>Available Times:</Form.Label>
        <br />
        <Form.Group>
          <Form.Check
            type="radio"
            value="9 AM"
            name="9 AM"
            label="9 AM"
            className={timeArr.indexOf("9 AM") === -1 && "time-unavailable"}
            disabled={timeArr.indexOf("9 AM") === -1}
            checked={selectedOption === "9 AM"}
            onChange={(e) => {
              setSelectedOption(e.target.value)
              setTime(e.target.value)
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Check
            type="radio"
            value="1 PM"
            name="1 PM"
            label="1 PM"
            className={timeArr.indexOf("1 PM") === -1 && "time-unavailable"}
            disabled={timeArr.indexOf("1 PM") === -1}
            checked={selectedOption === "1 PM"}
            onChange={(e) => {
              setSelectedOption(e.target.value)
              setTime(e.target.value)
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Check
            type="radio"
            value="5 PM"
            name="5 PM"
            label="5 PM"
            className={timeArr.indexOf("5 PM") === -1 && "time-unavailable"}
            disabled={timeArr.indexOf("5 PM") === -1}
            checked={selectedOption === "5 PM"}
            onChange={(e) => {
              setSelectedOption(e.target.value)
              setTime(e.target.value)
            }}
          />
        </Form.Group>
      </div>
    </div>
  )
}

export default TimeSlot
