import React, { useState, useEffect, useRef, useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import lottie from "lottie-web"
import CentralContext from "../context/centralContext"
const CustomedModal = ({ history }) => {
  const centralContext = useContext(CentralContext)
  const { clearData } = centralContext
  const [show, setShow] = useState(true)
  const handleClose = () => {
    setShow(false)
    clearData()
    history.push("/")
  }
  const container = useRef(null)
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("../components/check.json"),
    })
  })
  return (
    <div>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header className="d-flex flex-column justify-content-center align-items-center">
            <Modal.Title className="text-center">
              Thank You for choosing DET Beauty!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="d-block text-center">
              A confirmation email will be sent to you shortly.
            </p>
            <div className="confirm-container" ref={container}></div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  )
}

export default CustomedModal
