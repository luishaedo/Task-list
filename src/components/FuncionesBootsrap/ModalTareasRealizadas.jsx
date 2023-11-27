import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from "react-bootstrap/ListGroup";

function StaticExample(props) {
    
    const [tareaCompletada, setTareaCompletada] = useState(props.tareaCompletada || []);


    const handleRecuperar = (index) => {
        const tareaRecuperando = [...tareaCompletada];
        tareaRecuperando.splice(index,1);
        setTareaCompletada(tareaRecuperando);
        
    };

    const handleClose = () => {
      props.onHide()
    }

    return (
      <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Tareas Realizadas</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
            {tareaCompletada.length !=0 && 
            tareaCompletada.map((tarea,index) => (
                <>
                  <ListGroup.Item key={index}   style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div
                       style={{ maxWidth: '70%', overflow: 'hidden', textOverflow: 'ellipsis' }}
                    >
                      {tarea}
                    </div>
                    
                    <div style={{ width: '30%', display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                    style={{ marginRight: '5px' }}
                      onClick={() => handleRecuperar(index)}
                      size="sm"
                      variant="success"
                    >
                      Recuperar
                    </Button>
                   
                    </div>
                  </ListGroup.Item>
                </>
              ))

            }
          </Modal.Body>
  
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
            
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
  
  export default StaticExample;