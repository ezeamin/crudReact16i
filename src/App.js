import { useEffect, useState } from 'react';

import FormTarea from './components/FormTarea/FormTarea';
import ListadoTareas from './components/ListadoTareas/ListadoTareas';

const App = () => {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    const tareasLocalStorage = JSON.parse(localStorage.getItem('tareas'));

    if (tareasLocalStorage) {
      setTareas(tareasLocalStorage);
    }
  }, []);

  const changeTareasArray = (nuevoArreglo) => {
    localStorage.setItem('tareas', JSON.stringify(nuevoArreglo));

    setTareas(nuevoArreglo);
  };

  return (
    <div className='d-flex flex-column justify-content-center align-items-center vh-100'>
      <FormTarea tareas={tareas} changeTareasArray={changeTareasArray} />
      <ListadoTareas tareas={tareas} changeTareasArray={changeTareasArray} />
    </div>
  );
};

export default App;
