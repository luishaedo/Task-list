import React, { useState } from "react";
import { Button } from "react-bootstrap";
import StaticExample from "../../components/FuncionesBootsrap/ModalTareasRealizadas";
import { MyVerticallyCenteredModal } from "../../components/FuncionesBootsrap/ModalIngresarTarea";
import ListGroup from "react-bootstrap/ListGroup";

const Home = () => {
  const [modalShowCrear, setmodalShowCrear] = useState(false);
  const [tareas, setTareas] = useState([]);
  const [tareaEditando, setTareaEditando] = useState(null);
  const [tareaCompletada, setTareaCompletada] = useState([]);
  const [modalShowRealizadas, setModalShowRealizadas] = useState(false);

  const handleGuardarTarea = (tarea) => {
    setTareas([...tareas, tarea]);

    setmodalShowCrear(false);
  };

  const handleEditarTarea = (index) => {
    const tareaSeleccionada = tareas[index];
    setTareaEditando(tareaSeleccionada);

    const nuevasTareas = tareas.filter((tarea, i) => i !== index);
    setTareas(nuevasTareas);

    setmodalShowCrear(true);
  };

  const handleEliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  const handleMostrarTarea = () => {};

  const handleTareaCompletada = (index) => {
    const tareaCompleta = tareas[index];
    setTareaCompletada([...tareaCompletada, tareaCompleta]);
    handleEliminarTarea(index);
  };

  const handleTareasCompletadas = () => {
    setModalShowRealizadas(true);
  };

  const handleRecuperarTarea = (index) => {
    const tareaRecuperada = tareaCompletada[index];
    setTareas([...tareas, tareaRecuperada]);
    const nuevasTareasCompletadas = tareaCompletada.filter(
      (_, i) => i !== index);
    setTareaCompletada(nuevasTareasCompletadas);
    setTareas([...tareas, tareaRecuperada])
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={() => setmodalShowCrear(true)}
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
        }}
      >
        Crear Nueva Tarea
      </Button>

      <MyVerticallyCenteredModal
        show={modalShowCrear}
        onHide={() => {
          setmodalShowCrear(false);
          setTareaEditando(null);
        }}
        guardarTarea={handleGuardarTarea}
        tareaEditando={tareaEditando}
      />
      {tareas && (
        <div>
          <ListGroup>
            {tareas.map((tarea, index) => (
              <>
                <ListGroup.Item
                  key={index}
                  onClick={handleMostrarTarea}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      maxWidth: "70%",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {tarea}
                  </div>

                  <div
                    style={{
                      width: "30%",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Button
                      style={{ marginRight: "5px" }}
                      onClick={() => handleTareaCompletada(index)}
                      size="sm"
                      variant="success"
                    >
                      Completada
                    </Button>

                    <Button
                      onClick={() => handleEditarTarea(index)}
                      size="sm"
                      style={{ marginRight: "5px" }}
                    >
                      Editar
                    </Button>

                    <Button
                      style={{ marginRight: "5px" }}
                      onClick={() => handleEliminarTarea(index)}
                      variant="danger"
                      size="sm"
                    >
                      Eliminar
                    </Button>
                  </div>
                </ListGroup.Item>
              </>
            ))}
          </ListGroup>
        </div>
      )}
      {tareaCompletada.length != 0 && (
        <Button onClick={handleTareasCompletadas} variant="danger" size="sm"
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
        }}>
          Tareas competadas
        </Button>
      )}
      {modalShowRealizadas && (
        <StaticExample
          show={modalShowRealizadas}
          onHide={() => {
            setModalShowRealizadas(false);
          }}
          recuperarTarea={handleRecuperarTarea}
          tareaCompletada={tareaCompletada}
          
        ></StaticExample>
      )}
    </>
  );
};

export default Home;
