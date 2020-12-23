import React, { useContext, useEffect, useState } from "react"
import MultiStepHeader from "../components/MultiStepHeader"
import CentralContext from "../context/centralContext"
import { Button } from "react-bootstrap"
import InfoIcon from "@material-ui/icons/Info"
import CustomedModal from "../components/Modal"
const DepositScreen = ({ history }) => {
  const centralContext = useContext(CentralContext)
  const [showModal, setshowModal] = useState(false)
  const { user } = centralContext
  useEffect(() => {
    if (!user.name) {
    //   history.push("/consentform")
    }
  }, [history, user])
  const onClickHandler = () => {
    setshowModal(true)
  }

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

      <div className="d-flex flex-column align-items-center mt-5 deposit-form">
        <h2>Deposit</h2>
        <p className="venmoIcon-desc">
          To finalize your appointment, please click on the Venmo icon to pay a
          $50 non-refundable deposit.
        </p>

        <a
          href="https://venmo.com/huynhNA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="venmoLogo">
            <img src="../../images/venmo.png" alt="venmo icon"></img>
          </div>
        </a>
        <p>
          After finished, please return to this page to confirm the transaction.
        </p>
        <Button block onClick={onClickHandler}>
          Confirm
        </Button>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            fontSize: "12px",
            marginTop: "5px",
          }}
        >
          <InfoIcon
            style={{ fill: "#d9534f", fontSize: "15px", marginTop: "1px", marginRight: '2px' }}
          />
          <p className="d-block text-danger note-text">
            Note: Please make sure to pay the deposit before submitting your
            appointment. Otherwise your appointment will be canceled.
          </p>
          {showModal && <CustomedModal history={history} />}
        </div>
      </div>
    </div>
  )
}

export default DepositScreen
