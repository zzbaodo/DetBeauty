import React from "react"
import { Link } from "react-router-dom"

const MultiStepHeader = ({ firstStep, secondStep, thirdStep }) => {
  const firstStepActive = firstStep ? "active" : ""
  const secondStepActive = secondStep ? "active" : ""
  return (
    <div className="multiStepHeader__container">
      <Link to="/schedule">
        <div className={`firstStep ${firstStepActive}`}>Select a Service</div>
      </Link>
      <Link to="/consentform">
        <div className={`secondStep ${secondStepActive}`}>Consent Form</div>
      </Link>

      <div className={`thirdStep ${thirdStep}`}>Deposit</div>
    </div>
  )
}

export default MultiStepHeader
