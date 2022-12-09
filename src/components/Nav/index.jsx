import styled from "styled-components";
import SearchBar from "./SearchBar";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

const Contenedor = styled.div`
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0px;
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  .cerrar {
    position: absolute;
    text-align: center;
    padding: 0px;
    width: 4rem;
    height: 4rem;
    top: 0;
    right: 0;
    transform: translate(-75%, 50%);
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    color: #ffffff;
    background: transparent;
    border: none;
    border-radius: 0.2rem;
    cursor: pointer;
    :hover {
      animation: glos 1s linear infinite;

      @keyframes glos {
        0% {
          text-shadow: 0px 0px 5px #030303;
        }
        50% {
          text-shadow: 0px 0px 5px #ffffff;
        }
        100% {
          text-shadow: 0px 0px 5px #000000;
        }
      }
    }
    :active {
      text-shadow: 0px 0px 10px white;
    }
    span {
      margin: 0px;
      font-size: 2rem;
    }
    p {
      margin: 0px;
    }
  }

  .atras {
    position: absolute;
    text-decoration: none;
    text-align: center;
    padding: 0px;
    top: 0;
    left: 0;
    margin: 0px;
    padding: 0px;
    transform: translate(50%, 50%);
    .icomer {
      font-size: 3rem;
      text-decoration: none;
      color: white;
      padding: 0px;
      margin: 0px;
    }
    .text {
      margin: 0px;
      color: white;
    }
  }

  .header {
    background-color: transparent;
    width: 100%;
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -15%);
  }
`;
const Icohome = styled.div`
  margin: 0px;
  img {
    margin: 5px 0px 0px 0px;
    width: 200px;
    /*     position: absolute;
    width: 200px;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%); */
  }
`;

const Nave = styled.div`
  padding: 20px 20px 10px 20px;
  margin: 0px auto;
  .active {
    animation: gloas 1s linear infinite;

    @keyframes gloas {
      0% {
        text-shadow: 0px 0px 5px #fdfdfd;
      }
      50% {
        text-shadow: 0px 0px 5px #000000;
      }
      100% {
        text-shadow: 0px 0px 5px #ffffff;
      }
    }
  }
`;

export default function Nav(props) {
  const search = useSelector((state) => state.searchBar);
  const backS = useSelector((state) => state.back);
  const [searchBar, setSearchBar] = useState(search);
  const [back, setBack] = useState(backS);
  useEffect(() => {
    setSearchBar(search);
  }, [search]);
    useEffect(() => {
      setBack(backS);
    }, [backS]);
  return (
    <Contenedor>
      <div className="header">
        <Nave>
          <NavLink
            to={"/home"}
            className={({ isActive }) => (isActive ? "navl active" : "navl")}
          >
            Home
          </NavLink>
          <NavLink
            to={"/favorites"}
            className={({ isActive }) => (isActive ? "navl active" : "navl")}
          >
            Favorites
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) => (isActive ? "navl active" : "navl")}
          >
            About
          </NavLink>
        </Nave>
        {back ? (
          <Link className="atras" to={"/home"}>
            <p className="icomer">🔙</p>
          </Link>
        ) : (
          ""
        )}

        <button
          className="cerrar"
          onClick={() => {
            props.cerrarSesion();
          }}
        >
          <span>
            ❌<br />
          </span>
          <p>Log out</p>
        </button>
        <Icohome>
          <Link to={"/home"}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png"
              alt=""
            />
          </Link>
        </Icohome>
      </div>
      {searchBar ? (
        <SearchBar onSearch={props.onSearch} onAll={props.onAll} />
      ) : (
        ""
      )}
    </Contenedor>
  );
}
