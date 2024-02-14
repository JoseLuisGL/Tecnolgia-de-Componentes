import logo from './logo.svg';
import './App.css';
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Nuevo Usuario</h1>
        <CustomInput label={"Usuario"} disabled={false} type={"text"} />
        <CustomInput label={"Correo"} disabled={false} type={"email"}/>
        <CustomInput label={"Contraseña"} disabled={false} type={"password"}/>
        <br></br>
        <div>
        <CustomButton text={"Cancelar"} disabled={true}/> <CustomButton text={"Aceptar"} disabled={false}/>
        </div>
      </header>
    </div>
  );
}

export default App;
