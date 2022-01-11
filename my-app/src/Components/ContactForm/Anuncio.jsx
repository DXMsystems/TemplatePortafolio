import { Button, Modal } from "react-bootstrap";

export default function Anuncio(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="modalTitle">
        <Modal.Title id="contained-modal-title-vcenter">
          <h1>Message sent</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalBody">
        <p>Thanks for texting, I'll get in touch with you shortly.</p>
      </Modal.Body>
      <Modal.Footer className="modalFooter">
        <Button className="modalBoton" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
