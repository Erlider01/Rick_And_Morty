import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../Cards/Card";
import { connect, useDispatch } from "react-redux";
import { set_Back, set_SearchBar } from "../../redux/actions";
import NoEncontrado from "../NoEncontrado";
import cargandoimg from "../../img/espera.gif"

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
  .carg {
    width: 250px;
    border-radius: 250px;
  }
`;


const Fav = ({ myFavorites }) => {
  const [data, setData] = useState([...myFavorites]);
  const dispatch = useDispatch();
  dispatch(set_SearchBar(false))
  dispatch(set_Back(true))
  useEffect(()=>{
    setData([...myFavorites]);
  }, [myFavorites])
  return (
    <div>
      <StyleCards>
        {data.map((ele, i) => (
          <Card
            name={ele.name}
            species={ele.species}
            gender={ele.gender}
            image={ele.image}
            onClose={() => {}}
            id={ele.id}
            key={i}
          />
        ))}
      {data.length === 0 ? (
        <img className="carg" src={cargandoimg} alt="" />
      ) : (
        ""
      )}
      </StyleCards>
      {data.length === 0 ? (
        <NoEncontrado messange="No ha incluido cards a sus favoritos..." />
      ) : (
        ""
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  myFavorites: state.myFavorites,
});

export default connect(mapStateToProps, null)(Fav);
