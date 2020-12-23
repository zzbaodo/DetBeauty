import React, { useReducer } from "react"
import centralReducer from "./centralReducer"
import CentralContext from "./centralContext"
import moment from "moment"
import firebase from "../firebase"
const CentralState = ({ children }) => {
  const initState = {
    user: {
      service: "empty",
      date: "",
      dateUnix: "",
      time: "",
      timeUnix: "",
      name: "",
      email: "",
      phone: "",
      suitable: false,
      quest1: "",
      quest2: "",
      quest3: "",
      quest4: "",
      quest5: "",
      quest6: "",
      quest7: "",
      quest8: "",
      quest9: "",
      quest10: "",
      quest11: "",
      quest12: "",
      quest13: "",
      quest14: "",
      quest15: "",
      quest16: "",
      quest17: "",
      canvas: "",
      namePrint: "",
      dateSign: ''
    },
  }
  const [state, dispatch] = useReducer(centralReducer, initState)
  const db = firebase.firestore()
  //ACTIONS
  const selectService = (service) => {
    if (service === " empty") {
      console.log("1")
      dispatch({
        type: "REMOVE_SERVICE",
      })
    } else {
      console.log("2")
      dispatch({
        type: "SELECT_SERVICE",
        payload: service,
      })
    }
  }
  const submitConsentForm = (data) => {
    dispatch({
      type: "SUBMIT_CONSENT_FORM",
      payload: data,
    })
  }

  const setTime = (data) => {
    let newData
    if (data === "9 AM") {
      newData = 32400
    } else if (data === "1 PM") {
      newData = 46800
    } else if (data === "5 PM") {
      newData = 61200
    }
    dispatch({
      type: "SET_TIME",
      payload: { time: data, timeUnix: newData },
    })
  }
  const setDate = (date) => {
    const dateUnix = moment(date).unix()
    dispatch({
      type: "SET_DATE",
      payload: { date, dateUnix },
    })
  }
  const uploadImage = async (data) => {
    const image = db.collection("image").doc()
    await image.set({ dataURL: data })
  }

  return (
    <CentralContext.Provider
      value={{
        user: state.user,
        selectService,
        submitConsentForm,
        setTime,
        setDate,
        uploadImage,
      }}
    >
      {children}
    </CentralContext.Provider>
  )
}

export default CentralState
