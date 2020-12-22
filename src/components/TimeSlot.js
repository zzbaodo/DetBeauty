import React, { useState, useEffect } from "react"
import firebase from "../firebase"
import { Form } from "react-bootstrap"

const db = firebase.firestore()

const TimeSlot = ({ time }) => {
  const [timeArr, setTimeArr] = useState([])
  const [selectedOption, setSelectedOption] = useState(null)
  console.log(time)
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
  useEffect(() => {
    getData()
    // eslint-disable-next-line
  }, [time])

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
        {timeArr.length > 0 ? (
          timeArr.map((item) => {
            return (
              <Form.Group key={item}>
                <Form.Check
                  inline
                  type="radio"
                  value={item}
                  id={item}
                  name={item}
                  label={item}
                  checked={selectedOption === item}
                  onChange={(e) => setSelectedOption(e.target.value)}
                />
              </Form.Group>
            )
          })
        ) : (
          <p>No time available</p>
        )}
      </div>
    </div>
  )
}

export default TimeSlot
