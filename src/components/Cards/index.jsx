import Card from "./Card";
import styled from "styled-components";
import cargandoimg from "../../img/espera.gif";
import NoEncontrado from "../NoEncontrado";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set_Back, set_SearchBar } from "../../redux/actions";

const StyleCards = styled.div`
  position: absolute;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  height: 60vh;
  overflow: auto;
  box-shadow: 0px 0px 3px white;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  ::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ffffff7a;
    border-radius: 10px;
  }
`;
const Div = styled.div`
  .carg {
    width: 250px;
    border-radius: 250px;
  }
`;

export default function Cards(props) {
  const validacionS = useSelector((state) => state.validacion);
  const cargandoS = useSelector((state) => state.cargando);
  const [validacion, setValidacion] = useState(false);
  const [cargando, setCargando] = useState(false);
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.searchBar.filter);
  dispatch(set_SearchBar({rendery: true, search: true, filter: filter }));
  dispatch(set_Back(false));

  useEffect(() => {
    setValidacion(validacionS);
  }, [validacionS]);

  useEffect(() => {
    setCargando(cargandoS);
  }, [cargandoS]);
  return (
    <Div>
      <StyleCards className="containt">
        {props.characters.map((ele, i) => (
          <Card
            name={ele.name}
            species={ele.species}
            gender={ele.gender}
            image={ele.image}
            onClose={props.onClose}
            id={ele.id}
            key={i}
          />
        ))}
        {props.characters.length === 0 ? (
          <img className="carg" src={cargandoimg} alt="" />
        ) : (
          ""
        )}
      </StyleCards>
      {props.characters.length === 0 && !validacion && !cargando ? (
        <NoEncontrado messange="No hay Cards, por favor busque alguna*" />
      ) : (
        ""
      )}
    </Div>
  );
}
