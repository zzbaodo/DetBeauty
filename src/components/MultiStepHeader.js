import React from "react"
import { Link } from "react-router-dom"

const MultiStepHeader = ({ firstStep, secondStep, thirdStep }) => {
  const firstStepActive = firstStep ? "active" : ""
  const secondStepAvailablity = secondStep[0]
  const secondStepActive = secondStep[1]

  return (
    <div className="multiStepHeader__container">
      <Link to="/schedule">
        <div className={`firstStep ${firstStepActive}`}>Select a Service</div>
      </Link>
      <Link
        to={
          secondStepAvailablity === "available" ? "/consentform" : "/schedule"
        }
      >
        <div
          className={`secondStep ${secondStepActive} ${secondStepAvailablity}`}
        >
          Consent Form
        </div>
      </Link>

      <div className={`thirdStep ${thirdStep}`}>Deposit</div>
    </div>
  )
}

export default MultiStepHeader
