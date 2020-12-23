import React, { useState, useEffect, useRef } from "react"
import { Button, Modal } from "react-bootstrap"
import lottie from "lottie-web"
const CustomedModal = ({ history }) => {
  const [show, setShow] = useState(true)
  const handleClose = () => {
    setShow(false)
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
          <Modal.Header closeButton>
            <Modal.Title>Thank You for putting your trust in us!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="confirm-container" ref={container}></div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  )
}

export default CustomedModal
