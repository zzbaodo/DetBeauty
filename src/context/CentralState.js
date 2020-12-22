import React, { useReducer } from "react"
import centralReducer from "./centralReducer"
import CentralContext from "./centralContext"
const CentralState = ({ children }) => {
  const initState = {
    user: {
      service: "empty",
      suitable: false,
      date: "",
      name: "",
      email: "",
      phone: "",
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
    },
  }
  const [state, dispatch] = useReducer(centralReducer, initState)

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

  return (
    <CentralContext.Provider
      value={{
        user: state.user,
        selectService,
        submitConsentForm,
      }}
    >
      {children}
    </CentralContext.Provider>
  )
}

export default CentralState
