import React, { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const FormTarea = (props) => {
  const { tareas, setTareas } = props;

  const [tarea, setTarea] = useState('');

  const inputRef = useRef();

  const handleChange = (e) => {
    setTarea(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Caso error
    if (tarea.trim().length === 0) {
      inputRef.current.classList.add('is-invalid');
      alert('No es valido');
      return;
    }

    // Caso exitoso
    inputRef.current.classList.remove('is-invalid');

    const nuevasTareas = [
      ...tareas, //Operador "spread"
      {
        tarea, // tarea: tarea, -> es lo mismo
        isDone: false,
        id: Math.round(Math.random() * 30000),
      },
    ];

    setTareas(nuevasTareas);

    localStorage.setItem('tareas', JSON.stringify(nuevasTareas));
  };

  return (
    <div className='p-3 bg-danger rounded'>
      <h1>Ingrese una tarea</h1>
      <hr />
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formTareas'>
          <Form.Label>Tarea</Form.Label>
          <Form.Control
            value={tarea}
            onChange={handleChange}
            type='text'
            ref={inputRef}
            placeholder='Ingrese una tarea'
          />
        </Form.Group>
        <div className='text-end'>
          <Button variant='secondary' type='submit'>
            Guardar
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default FormTarea;
