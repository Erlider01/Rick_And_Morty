import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import Contenido from "./components/Contenido";

export const data = {
  usuario: "admin",
  password: "Jose123.",
  login: false,
};

function App() {
  const [access, setAccess] = useState(data);

  const onAccess = (datos) => {
    if (
      datos.username.toLowerCase() === access.usuario.toLowerCase() &&
      datos.password == access.password
    ) {
      setAccess({
        ...access,
        login: true,
      });
    }
    console.log(datos, access);
  };

  const cerrarSesion = () => {
  setAccess({...access, login: false})
  }

  return (
    <div className="App">
      {access.login ? <Contenido cerrarSesion={cerrarSesion} /> : <Form onAccess={onAccess} />}
    </div>
  );
}

export default App;
