import React, { useEffect, useRef } from 'react';
import { Form, ListGroup } from 'react-bootstrap';

const ListadoItem = (props) => {
  const { tarea, tareas, setTareas } = props;

  const checkboxRef = useRef();

  useEffect(() => {
    if (tarea.isDone) {
      checkboxRef.current.checked = true;
    } else {
      checkboxRef.current.checked = false;
    }
  }, [tarea]);

  const handleDone = () => {
    const nuevoEstadoTarea = {
      ...tarea,
      isDone: !tarea.isDone,
    };

    const tareaIndex = tareas.findIndex((elemento) => {
      return elemento.id === tarea.id;
    });

    // No se pueden modificar las props (REGLA), menos algo que
    // viene de un useState (habria que usar setTareas) para ello
    const nuevoArregloTareas = [...tareas]; // Copio el arreglo de las props

    // Modifico la tarea especifica en la COPIA del arreglo original
    nuevoArregloTareas[tareaIndex] = nuevoEstadoTarea;

    // Guardo los nuevos valores
    localStorage.setItem('tareas', JSON.stringify(nuevoArregloTareas));

    // Llamo a cambiar la variable tareas con los nuevos valores
    setTareas(nuevoArregloTareas);
  };

  return (
    <ListGroup.Item>
      <Form className='d-flex justify-content-between'>
        {tarea.tarea}
        <Form.Check ref={checkboxRef} className='ms-4' onClick={handleDone} />
      </Form>
    </ListGroup.Item>
  );
};

export default ListadoItem;
