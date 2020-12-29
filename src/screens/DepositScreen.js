import React, { useContext, useEffect, useState } from "react"
import MultiStepHeader from "../components/MultiStepHeader"
import CentralContext from "../context/centralContext"
import { Spinner } from "react-bootstrap"
import { Button } from "react-bootstrap"
import InfoIcon from "@material-ui/icons/Info"
import CustomedModal from "../components/Modal"
import firebase from "../firebase"
const DepositScreen = ({ history }) => {
  const centralContext = useContext(CentralContext)
  const [showModal, setshowModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const { user } = centralContext
  useEffect(() => {
    if (!user.name) {
      history.push("/consentform")
    }
  }, [history, user])
  const onClickHandler = async () => {
    setLoading(true)
    const db = firebase.firestore()
    const data = {
      service: user.service,
      dateStd: user.date,
      date: user.dateUnix,
      time: user.time,
      appTime: user.timeUnix,
      name: user.name,
      email: user.email,
      phone: user.phone,
      quest1: user.quest1,
      quest2: user.quest2,
      quest3: user.quest3,
      quest4: user.quest4,
      quest5: user.quest5,
      quest6: user.quest6,
      quest7: user.quest7,
      quest8: user.quest8,
      quest9: user.quest9,
      quest10: user.quest10,
      quest11: user.quest11,
      quest12: user.quest12,
      quest13: user.quest13,
      quest14: user.quest14,
      quest15: user.quest15,
      quest16: user.quest16,
      quest17: user.quest17,
      canvas: user.canvas,
      namePrint: user.namePrint,
      dateSign: user.dateSign,
    }
    try {
      await db
        .collection("appointment")
        .doc(`${user.email}_${user.phone}`)
        .set(data)
      setLoading(false)

      setshowModal(true)
    } catch (error) {
      console.error(error)
    }
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
        {loading ? (
          <Spinner />
        ) : (
          <Button block onClick={onClickHandler}>
            Confirm
          </Button>
        )}

        <div
          style={{
            display: "flex",
            alignContent: "center",
            fontSize: "12px",
            marginTop: "5px",
          }}
        >
          <InfoIcon
            style={{
              fill: "#d9534f",
              fontSize: "15px",
              marginTop: "1px",
              marginRight: "2px",
            }}
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
