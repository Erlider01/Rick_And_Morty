import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import photo from '../../img/photo.jpg'

const Span = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  margin: 0px auto;
`;

const Div = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  background-color: #000000d9;
  width: 750px;
  margin: 10px auto;
  padding: 10px;
  border-radius: 10px;
`;
const Div1 = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
  margin: 5px auto;
`;
const Div2 = styled.div`
  padding: 5px;

  p {
    img {
      width: 130px;
      border-radius: 5px;
      float: left;
      margin-right: 15px;
    }

    font-size: 1.2rem;
    color: white;
    text-align: justify;
    width: 650px;
    margin: 10px auto;
  }
`;

const Buttons = styled.button`
  background: none;
  border-style: none;
  padding: 2px;
  margin: 0px auto;
  position: absolute;
  img {
    width: 50px;
    :hover {
    box-shadow: 1px 1px 5px #fcfcff44;
  }
}
`;

export default function About() {
  return (
    <Div>
      <Div1>
        <Buttons>
          <Link to={"/home"}>
            <img
              src="http://departamentos.colegiosansaturio.com/deptomatesweb/4ESO/informatica%20web/temas/Unidad_5/images/atras.png"
              alt=""
            />
          </Link>
        </Buttons>
        <Span>Acerca de: </Span>
      </Div1>
      <Div2>
        <p>
          <img src={photo} alt="" />
          Rick and Morty es una Web de aprendizaje en donde se llama a una Api
          que nos proporciona informacion para el contenido, ademas utilizamos
          tecnologia routing, componentes de React y estilos css (por
          componentes en este caso). Este es mi primero proyecto y parte del camino para
          lograr ser un Full Stack Developer. <br />
          <br /> Soy José Gacía, tengo 23 años, Venezolano, en el diseño web me inclino por lo simple aunque estético diría que mi
          fuerte es la programación y correspondo por ser amante de las buenas practicas y sobre
          todo el orden del codigo. Espero que les guste esté proyecto, gracias
          por su visita y estoy abierto a cualquier sugerencia.
        </p>
      </Div2>
    </Div>
  );
}
