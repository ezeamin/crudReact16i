import React, { useEffect, useRef } from 'react';
import { Form, ListGroup } from 'react-bootstrap';

const ListadoItem = (props) => {
  const { tarea, tareas, changeTareasArray } = props;

  const checkboxRef = useRef();

  useEffect(() => {
    if (tarea.isDone) {
      checkboxRef.current.checked = true;
    } else {
      checkboxRef.current.checked = false;
    }
  }, [tarea]);

  const handleDelete = () => {
    const nuevoArreglo = tareas.filter((elemento) => {
      return elemento.id !== tarea.id;
    });

    changeTareasArray(nuevoArreglo);
  };

  const handleDone = () => {
    //? OPCION 1 (mas larga) ------------------------

    //* Creo un objeto con la nueva info de la tarea
    // const nuevoEstadoTarea = {
    //   ...tarea,
    //   isDone: !tarea.isDone,
    // };

    //* Busco la posicion en el array de las tareas
    // const tareaIndex = tareas.findIndex((elemento) => {
    //   return elemento.id === tarea.id;
    // });

    //* No se pueden modificar las props (REGLA), menos algo que
    //* viene de un useState (habria que usar setTareas) para ello
    // const nuevoArregloTareas = [...tareas]; // Copio el arreglo de las props

    //* Modifico la tarea especifica en la COPIA del arreglo original
    // nuevoArregloTareas[tareaIndex] = nuevoEstadoTarea;

    //? OPCION 2 (optimizacion de la 1) ------------------------

    //* El .map devuelve un NUEVO arreglo, por lo que esta
    //* operacion es valida, ya que no modifica las props
    const nuevoArregloTareas = tareas.map((elemento) => {
      //* Si es la tarea buscada, la modifico
      if (elemento.id === tarea.id) {
        return {
          ...elemento,
          isDone: !elemento.isDone,
        };
      }

      //* Sino, devuelvo la tarea tal cual está
      return elemento;
    });

    //? EN CUALQUIER CASO, TERMINAR CON: -----------------------

    //* Llamo a cambiar la variable tareas de App.js con los nuevos valores
    changeTareasArray(nuevoArregloTareas);
  };

  return (
    <ListGroup.Item>
      <Form className='d-flex justify-content-between'>
        {tarea.tarea}
        <div className='d-flex align-items-center'>
          <Form.Check ref={checkboxRef} className='ms-4' onClick={handleDone} />
          <i
            className='fa-solid fa-trash ms-2 text-danger'
            onClick={handleDelete}
          ></i>
        </div>
      </Form>
    </ListGroup.Item>
  );
};

export default ListadoItem;
