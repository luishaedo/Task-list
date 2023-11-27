import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState, useEffect } from "react";

export function MyVerticallyCenteredModal(props) {
  const [tarea, setTarea] = useState(props.tareaEditando || "");

  useEffect(() => {
    setTarea(props.tareaEditando || "");
  }, [props.tareaEditando]);

  const handleBtnCrear = () => {
    if (!tarea) {
      props.onHide();
    } else {
      props.guardarTarea(tarea);
      setTarea("");
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Crea una nueva tarea
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup>
          <Form.Control
            as="textarea"
            aria-label="With textarea"
            placeholder="Escribí tu tarea"
            value={tarea}
            onChange={(e) => setTarea(e.target.value)}
          />
        </InputGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={handleBtnCrear}>
          Crear
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
