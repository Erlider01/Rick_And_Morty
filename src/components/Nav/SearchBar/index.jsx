import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set_Filter, set_SearchBar } from "../../../redux/actions";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const ImputSt = styled.input`
  margin: 0px 5px;
  text-align: right;
  font-size: 1.5rem;
  margin: 0px;
  padding-right: 5px;
  margin-right: 10px;
  width: 4.5rem;
  background: #00000047;
  color: white;
  border: none;
  box-shadow: 0px 0px 5px 2px white;
  border-radius: 5px;
  font-weight: 400;
  ::placeholder {
    text-align: center;
    color: #e2e2e2;
  }
  :focus {
    animation: glosa 1.5s linear infinite;

    @keyframes glosa {
      0% {
        box-shadow: 0px 0px 5px 2px white;
      }
      50% {
        box-shadow: 0px 0px 10px 5px white;
      }
      100% {
        box-shadow: 0px 0px 5px 2px white;
      }
    }
    box-shadow: 0px 0px 10px 5px white;
  }
`;
const ButtonSt = styled.button`
  background: #000000cf;
  cursor: pointer;
  border: 2px;
  padding: 8px 5px;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  position: relative;
  border-radius: 5px;
  border-style: none;
  margin: 0px 4px;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 102%;
    height: 102%;
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
  }

  :hover {
    box-shadow: 0px 0px 10px white;

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
      animation: gloa 10s linear infinite;
      @keyframes gloa {
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
    }
  }
  :active {
    box-shadow: 0px 0px 5px #ffffff;
  }
`;
const DivSt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 9%;
  left: 50%;
  transform: translate(-50%, -15%);
`;

export default function SearchBar({ onSearch, onAll }) {
  const ruta = useLocation();
  const dispatch = useDispatch();
  const viewS = useSelector((state) => state.searchBar);
  const [view, setView] = useState(viewS);
  const [character, setCharacter] = useState("");
  const [filtrado, setFiltrado] = useState({
    idOrder: "Acendente",
    generoOrder: "none",
  });

  const handles = (evento) => {
    setFiltrado({ ...filtrado, [evento.target.name]: evento.target.value });
  };
  useEffect(
    (nul) => {
      setView(viewS);
    },
    [viewS]
  );
  useEffect(
    (nul) => {
      dispatch(set_SearchBar({ ...view, filter: view.filter }));
      if (view.filter) {
        if (filtrado.idOrder === "Acendente") {
          dispatch(
            set_Filter({
              id: "ascendente",
              state: "allFavorites",
              mody: "myFavorites",
            })
          );
        } else if (filtrado.idOrder === "Descendente") {
          dispatch(
            set_Filter({
              id: "descendente",
              state: "allFavorites",
              mody: "myFavorites",
            })
          );
        }
        if (filtrado.generoOrder === "Male") {
          dispatch(
            set_Filter({
              id: "male",
              state: "allFavorites",
              mody: "myFavorites",
            })
          );
        } else if (filtrado.generoOrder === "Female") {
          dispatch(
            set_Filter({
              id: "female",
              state: "allFavorites",
              mody: "myFavorites",
            })
          );
        } else if (filtrado.generoOrder === "unknown") {
          dispatch(
            set_Filter({
              id: "desconocido",
              state: "allFavorites",
              mody: "myFavorites",
            })
          );
        }
      } else {
        dispatch(
          set_Filter({
            id: "original",
            state: "allFavorites",
            mody: "myFavorites",
          })
        );
      }
    },
    [view.filter, filtrado.idOrder, filtrado.generoOrder]
  );

  return (
    <DivSt>
      {view.search ? (
        <ImputSt
          type={"text"}
          value={character}
          placeholder="ID..."
          onChange={(ele) => {
            setCharacter(ele.target.value);
          }}
        />
      ) : (
        ""
      )}

      {view.search ? (
        <ButtonSt
          onClick={() => {
            onSearch(character);
            setCharacter("");
          }}
        >
          ADD
        </ButtonSt>
      ) : (
        ""
      )}
      {view.search ? <ButtonSt onClick={() => onAll()}>RANDOM</ButtonSt> : ""}

      <ButtonSt>
        <label htmlFor="filter">Filter</label>
        <input
          onClick={() => {
            setView((state) => ({ ...state, filter: !state.filter }));
          }}
          id="filter"
          type="checkbox"
        />
      </ButtonSt>
      {view.filter ? (
        <div className="filterContainer">
          <div className="idOrder">
            <label htmlFor="">Id: </label>
            <select name="idOrder" id="" onChange={handles}>
              <option value="Acendente">Ascendente</option>
              <option value="Descendente">Descendente</option>
            </select>
          </div>
          <div className="generoOrder">
            <label htmlFor="">Genero: </label>
            <select name="generoOrder" id="" onChange={handles}>
              <option value="none">none</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="unknown">Desconocido</option>
            </select>
          </div>
        </div>
      ) : (
        ""
      )}
    </DivSt>
  );
}
