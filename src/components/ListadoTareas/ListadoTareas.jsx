import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ListadoItem from './ListadoItem';

const ListadoTareas = (props) => {
  const { tareas, setTareas } = props;

  return (
    <ListGroup className='mt-2'>
      {tareas.map((tarea, index) => {
        return (
          <ListadoItem
            key={index}
            tarea={tarea}
            tareas={tareas}
            setTareas={setTareas}
          />
        );
      })}
    </ListGroup>
  );
};

export default ListadoTareas;
