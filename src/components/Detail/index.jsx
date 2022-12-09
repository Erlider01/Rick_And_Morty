import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { set_Back, set_SearchBar } from "../../redux/actions";

const Div = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  padding: 15px;
  background-color: #00000094;
  overflow: auto;
  box-shadow: 0px 0px 5px white;
  border-radius: 10px;

  :hover {
    animation: sd 1s linear infinite;
    text-shadow: 0px 0px 4px 2px white;
    @keyframes sd {
      0% {
        box-shadow: 0px 0px 4px 2px white;
      }

      50% {
        box-shadow: 0px 0px 7px 2px white;
      }

      100% {
        box-shadow: 0px 0px 4px 2px white;
      }
    }
  }
  .name {
    display: block;
    width: 100%;
    font-size: 1.5rem;
    color: white;
    padding: 0px;
    margin: 10px 0px;
  }
  .img {
    width: 200px;
    border-radius: 10px;
    border: 5px solid #ffffff92;
  }
  .detalles {
    margin: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
  .text {
    font-size: 1.2rem;
    text-align: left;
    margin: 0px;
    margin-left: 10px;
    margin-bottom: ;
    h3 {
      margin: 0px;
      margin-bottom: 15px;
    }
  }
`;

export default function Detail() {
  const dispatch = useDispatch();
  dispatch(set_Back(true));
  dispatch(set_SearchBar(false));
  let { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <Div>
      <h3 className="name">{character.name}</h3>
      <div className="detalles">
        <div>
          <img className="img" src={character.image} alt="" />;
        </div>
        <div className="text">
          <h3>
            Status:
            {character.status === "unknown"
              ? " Desconocido"
              : " " + character.status}
          </h3>
          <h3>
            Especie:
            {character.species === "unknown"
              ? " Desconocido"
              : " " + character.species}
          </h3>
          <h3>
            Genero:
            {character.gender === "unknown"
              ? " Desconocido"
              : " " + character.gender}
          </h3>
          <h3>
            Origen:
            {character.origin?.name === "unknown"
              ? " Desconocido"
              : " " + character.origin?.name}
          </h3>
        </div>
      </div>
    </Div>
  );
}
