import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { set_Back, set_SearchBar } from "../../redux/actions";

const Div = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  z-index: 1;
  /* background-color: #00000094; */
  display: flex;
  width: 700px;
  height: 350px;
  color: white;
  .imgBox {
    margin: 0px;
    padding: 0px;
    width: 350px;
    height: 350px;
    img {
      margin: 0px;
      padding: 0px;
      width: 350px;
      height: 350px;
      border-radius: 350px;
    }
  }
  .detailBox {
    margin: 0px;
    padding: 0px;
    width: 350px;
    height: 350px;
    display: flex;
    flex-wrap: wrap;

    .titleBox {
      margin: 0px;
      padding: 0px;
      width: 350px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      h1 {
        margin: 0px;
        padding: 0px;
        font-size: 1.8rem;
        text-shadow: 1px 1px 5px black;
      }
    }
  }
  .description {
    padding: 0px;
    margin: 0px;
    height: 125px;
    width: 175px;
    h3 {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      margin: 0px;
      padding: 0px;
      font-size: 1.2rem;
      font-weight: bold;
      text-shadow: 1px 1px 5px black;
    }
    p {
      display: flex;
      text-align: left;
      margin: 5px 10px;
      justify-content: center;
      font-size: 1rem;
      text-shadow: 1px 1px 5px black;
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
      <div className="imgBox">
        <img className="img" src={character.image} alt="" />;
      </div>
      <div className="detailBox">
        <div className="titleBox">
          <h1 className="name">{character.name}</h1>
        </div>
        <div className="boxStatus description">
          <h3>Status:</h3>
          <p>
            {character.status === "unknown"
              ? " Desconocido"
              : " " + character.status}
          </p>
        </div>
        <div className="boxEspecie description">
          <h3>Especie:</h3>
          <p>
            {character.species === "unknown"
              ? " Desconocido"
              : " " + character.species}
          </p>
        </div>
        <div className="boxGenero description">
          <h3>Genero:</h3>
          <p>
            {character.gender === "unknown"
              ? " Desconocido"
              : " " + character.gender}
          </p>
        </div>
        <div className="boxOrigen description">
          <h3>Origen:</h3>
          <p>
            {character.origin?.name === "unknown"
              ? " Desconocido"
              : " " + character.origin?.name}
          </p>
        </div>
      </div>
    </Div>
  );
}
