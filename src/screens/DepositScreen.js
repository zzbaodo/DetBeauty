import React, { useContext } from "react"
import MultiStepHeader from "../components/MultiStepHeader"
import CentralContext from "../context/centralContext"

const DepositScreen = () => {
  const centralContext = useContext(CentralContext)
  const { user } = centralContext
  return (
    <div>
      <MultiStepHeader
        secondStep={
          user.service !== "empty"
            ? ["available", "inactive"]
            : ["unavailable", "inactive"]
        }
        thirdStep="active"
      />
    </div>
  )
}

export default DepositScreen
