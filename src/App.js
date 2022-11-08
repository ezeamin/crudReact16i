import FormTarea from "./components/FormTarea/FormTarea";
import ListadoTareas from "./components/ListadoTareas/ListadoTareas";

const App = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <FormTarea />
      <ListadoTareas />
    </div>
  );
}

export default App;
