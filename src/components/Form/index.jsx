import { useState } from "react";
import styled from "styled-components";
import { data } from "../../App.js";
import NoEncontrado from "../NoEncontrado/index.jsx";
import image from "../../img/icomer.png";

const Font = "1.3rem";

const DivPrincipal = styled.div`
  /* width: 25rem; */

  @font-face {
    font-family: "fuente";
    src: url("Font/OpenSans_SemiCondensed-Regular.ttf") format("truetype");
  }

  /* background-color: #000000c7; */
  padding: 0.5rem;
  border-radius: 10px;
  font-family: fuente;
  label,
  input,
  button {
    font-size: ${Font};
  }
  img {
    width: 5rem;
  }
  input {
    margin: 0px;
    font-family: fuente;
    width: 7rem;
    background: #00000052;
    outline: none;
    border: 0;
    border-radius: 5px;
    color: white;
    text-align: right;
    padding: 5px 10px;
    font-weight: 600;
    box-shadow: 0px 0px 5px white;
    font-size: 1.5rem;

    :focus {
      box-shadow: 0px 0px 10px white;
      font-weight: 600;
    }

    ::placeholder {
      color: #cccbcb;
      text-align: center;
      font-weight: 600;
    }
  }

  label {
    color: white;
  }

  div {
    margin: 20px;
  }
  button {
    padding: 5px 15px;
    margin: 10px;
    cursor: pointer;
    background-color: #100113d6;
    color: #ffffff;
    border-radius: 5px;
    border: none;
    font-weight: 600;
    box-shadow: 0px 0px 5px #fffefe;
    position: relative;

    ::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        45deg,
        #d400ff,
        #4c00ff,
        #ff000d,
        #d0ff00,
        #003cff,
        #00ff55,
        #ff5100,
        #ceb9b0
      );
      background-size: 800%;
      border-radius: 10px;
      filter: blur(8px);
      animation: glo 20s linear infinite;
    }
    @keyframes glo {
      0% {
        background-position: 0 0;
      }
      50% {
        background-position: 400% 0;
      }
      100% {
        background-position: 0 0;
      }
    }

    :hover {
      box-shadow: 0px 0px 10px #ffffff;
    }

    :active {
      box-shadow: 0px 0px 5px #ffffff;
    }
  }
`;

const Div = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  padding-top: 125px;
  width: 350px;
  box-shadow: 0px 0px 10px white;
  border-radius: 15px;
  img {
    position: absolute;
    top: 10%;
    right: 50%;
    transform: translate(50%, -10%);
    animation: form 1s linear infinite;
    width: 20rem;
    @keyframes form {
      0% {
        width: 20rem;
      }
      50% {
        width: 20.5rem;
      }
      100% {
        width: 20rem;
      }
    }
  }
`;

const Principal = styled.div`
.incorrecto {
  animation: rele 0.3s linear;
  animation-direction: reverse;
  
}
@keyframes rele {
  0% {
    left: 49%;
  }
  50%{
    left: 50%
  }
  75% {
    left: 51%;
  }
  100%{
    left: 50%;
  }
}
`;

export default function Form({ onAccess }) {
  const [datos, setDatos] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    valido: "",
  });

  const validate = (obj, ev) => {
    let errores = {};
    if (!obj.username && ev === "username")
      errores.username = "El campo esta vacio";
    else if (ev === "username") errores.username = "";
    else if (!/^(?=\w*\d)\S{6,10}$/.test(obj.password) && ev === "password")
      errores.password = "Debe de contener al menos un numero";
    else if (ev === "password") errores.password = "";
    else if (
      ev === "valido" &&
      (datos.username !== data.usuario || datos.password !== data.password)
    ) {
      errores.valido = "Datos incorrectos *";
    }

    return errores;
  };

  const capturador = (evento) => {
    setDatos({
      ...datos,
      [evento.target.name]: evento.target.value,
    });

    setErrors({
      ...errors,
      ...validate(
        {
          ...datos,
          [evento.target.name]: evento.target.value,
        },
        evento.target.name
      ),
      valido: ""
    });
  };

/*   useEffect(()=> {
    if(errors.valido){     
        setErrors({...errors, valido: ""})
  }}, [errors]) */

  return (
    <Principal>
      <Div className={errors.valido ? "incorrecto" : ""}>
        <img src={image} alt="" />
        <DivPrincipal>
          <div>
            {/* <label htmlFor="Username">Username: </label> */}
            <input
              id="Username"
              type="text"
              name="username"
              value={datos.username}
              placeholder="Usernames"
              onChange={capturador}
            />
          </div>
          <div>
            {/* <label htmlFor="password">Password: </label>g */}
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={datos.password}
              name="password"
              onChange={capturador}
            />
          </div>
          <button
            onClick={(ele) => {
              onAccess(datos);
              setErrors({
                ...errors,
                ...validate(datos, "valido"),
                username: "",
                password: "",
              });
              setDatos({ ...datos, username: "", password: "" });
            }}
            onKeyPress={(ele) => {
              onAccess(datos);
              setErrors({
                ...errors,
                ...validate(datos, "valido"),
                username: "",
                password: "",
              });
              setDatos({ ...datos, username: "", password: "" });
            }}
          >
            Login
          </button>
        </DivPrincipal>
      </Div>
      {errors.username || errors.password ? (
        <NoEncontrado
          messange={`${
            errors.username ? "Usuario: " + errors.username + "* \n\n" : ""
          } ${errors.password ? "Clave: " + errors.password + " *" : ""}`}
        />
      ) : (
        ""
      )}
      {errors.valido && !datos.username && !datos.password ? (
        <NoEncontrado messange={errors.valido} />
      ) : (
        ""
      )}
    </Principal>
  );
}
