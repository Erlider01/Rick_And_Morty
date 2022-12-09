import Nav from "../Nav";
import Cards from "../Cards";
import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import About from "../About";
import Detail from "../Detail";
import NoEncontrado from "../NoEncontrado";
import Fav from "../Fav/Fav";
import { useEffect } from "react";
import "./contenido.css";
import { useDispatch } from "react-redux";
import { set_Cargando, set_Validacion } from "../../redux/actions";

export default function Contenido({ cerrarSesion }) {
  const [validacion, setValidacion] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [existe, setExiste] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(set_Validacion(validacion));
  }, [validacion]);
  useEffect(() => {
    dispatch(set_Cargando(cargando));
  }, [cargando]);

  const onSearch = (ele) => {
    setValidacion(false);
    if (!(characters.length === 0) && characters.find((ind) => ind.id == ele)) {
      setExiste(true);
      setTimeout(() => {
        setExiste(false);
      }, 3000);
      return undefined;
    }
    setCargando(true);
    fetch(`https://rickandmortyapi.com/api/character/${ele}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
          setCargando(false);
        } else {
          setCargando(false);
          setValidacion(true);
          setTimeout(() => {
            setValidacion(false);
          }, 3000);
        }
      });
  };

  const onClose = (id) => {
    setCharacters((old) => [...old.filter((e) => e.id != id)]);
  };

  const noEncontradoMessanger = () => {
    if (cargando === true)
      return (
        <NoEncontrado
          onClose={() => setValidacion(false)}
          messange={"Cargando..."}
        />
      );
    else if (validacion) {
      return (
        <NoEncontrado
          onClose={() => setValidacion(false)}
          messange={"El id no exite..."}
        />
      );
    } else if (existe) {
      return (
        <NoEncontrado
          onClose={() => setValidacion(false)}
          messange={"El id ya existe..."}
        />
      );
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home");
  }, []);

  const onAll = () => {
    setCargando(true);
    let numero = Math.floor(Math.random() * (826 - 1 + 1) + 1);
    setValidacion(false);
    if (!(characters.length === 0)) {
      while (characters.find((ind) => ind.id == numero)) {
        numero = Math.floor(Math.random() * (826 - 1 + 1) + 1);
      }
    }
    fetch(`https://rickandmortyapi.com/api/character/${numero}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
          setCargando(false);
        } else {
          setCargando(false);
          setValidacion(true);
          setTimeout(() => {
            setValidacion(false);
          }, 3000);
        }
      });
  };

  return (
    <div className="">
      <Nav onSearch={onSearch} cerrarSesion={cerrarSesion} onAll={onAll} />
      {noEncontradoMessanger()}

      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Fav />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}
