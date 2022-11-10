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

  return (
    <div className='d-flex flex-column justify-content-center align-items-center vh-100'>
      <FormTarea tareas={tareas} setTareas={setTareas} />
      <ListadoTareas tareas={tareas} setTareas={setTareas} />
    </div>
  );
};

export default App;
