import React from "react";
import styled from "styled-components";
import photo from '../../img/photo.jpg'
import { useDispatch } from "react-redux";
import { set_Back, set_SearchBar } from "../../redux/actions";

const Span = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  margin: 0px auto;
  text-shadow: 0px 0px 10px black;
`;

const Div = styled.div`
padding: 0px;
margin: 0px;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 950px;
  transform: translate(-50%, -50%);
  z-index: 1;
`;
const Div1 = styled.div`
  padding: 5px;
  margin: 0;
`;
const Div2 = styled.div`
  padding: 5px;

  p {
    img {
      width: 180px;
      border-radius: 5px;
      float: left;
      margin: 0px;
      margin-right: 15px;
    }
    
    font-size: 1.2rem;
    text-shadow: 0px 0px 10px black;
    color: white;
    text-align: justify;
    margin: 10px auto;
  }
`;

export default function About() {
  const dispatch = useDispatch()
  dispatch(set_SearchBar(false))
  dispatch(set_Back(true))
  return (
    <Div>
      <Div1>
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
