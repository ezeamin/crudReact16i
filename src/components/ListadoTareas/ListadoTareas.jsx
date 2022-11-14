import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ListadoItem from './ListadoItem';

const ListadoTareas = (props) => {
  const { tareas, changeTareasArray } = props;

  return (
    <ListGroup className='mt-2'>
      {tareas.map((tarea) => {
        return (
          <ListadoItem
            key={tarea.id}
            tarea={tarea}
            tareas={tareas}
            changeTareasArray={changeTareasArray}
          />
        );
      })}
    </ListGroup>
  );
};

export default ListadoTareas;
