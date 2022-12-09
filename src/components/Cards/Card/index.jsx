import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setMyFav, deleteMyFav } from "../../../redux/actions";
import { useState, useEffect } from "react";

const Button = styled.p`
  padding: 0px;
  margin: 0px 4px;
  font-size: 1.2rem;
  cursor: pointer;
  :hover {
    animation: des 1s linear;
    text-shadow: 1px 1px 1px white;
    @keyframes des {
      0% {
        text-shadow: 1px 1px 1px white;
      }

      50% {
        text-shadow: 1px 1px 1px black;
      }

      100% {
        text-shadow: 1px 1px 1px white;
      }
    }
  }
`;

const Namesty = styled.h2`
  font-size: 1rem;
  text-align: left;
  margin: 0px;
`;

const SpanSt = styled.span`
  text-align: center;
  width: 171.24px;
  display: inline-block;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  margin-left: 3px;
  :hover {
    animation: das 1.5s infinite;
    text-shadow: 1px 1px 1px white;
    @keyframes das {
      0% {
        text-shadow: 0px 0px 1px white;
      }

      50% {
        text-shadow: 0px 0px 1px black;
      }

      100% {
        text-shadow: 0px 0px 1px white;
      }
    }
  }
`;
const SpecSt = styled.h2`
  font-size: 1rem;
  margin: 0.3rem auto;
  margin-bottom: 0px;
  font-weight: normal;
  color: white;
  font-weight: bold;
`;

const ContSt = styled.div`
  display: flex;
`;
const Imgsty = styled.div`
  width: 12rem;
  height: 12rem;
  border-radius: 0.4rem;
  margin: 0px auto;
  background-size: cover;
  border: 1px inset #ffffff;
`;

const Carta = styled.div`
  :hover {
    animation: faav 1s linear infinite;
    text-shadow: 0px 0px 4px 2px white;
    @keyframes faav {
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
  padding: 10px;
  width: 15rem;
  margin: 1rem 1rem;

  background: #00000075;
  box-shadow: 0px 0px 8px #ffffff;
  border-radius: 0.4rem;

  .ver {
    margin: 0px;
    padding: 0px;
    text-align: right;
    text-decoration: none;
    p {
      margin: 5px 10px;
      padding: 0px;
      font-size: 1rem;
      color: white;
      font-weight: bold;
      text-decoration: none;
      ::after {
        content: "...]";
      }
      :hover {
        text-shadow: 0px 0px 1px white;
        text-decoration: none;
      }
    }
  }

  :hover {
    /*  background-color: #850303; */
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0000006f;
    border: 4px inset #7777776d;
    padding: 2px;
  }

  .fav {
    display: inline-block;
    cursor: pointer;
    padding: 0px;
    margin: 0px;
    font-size: 1.2rem;

    :hover {
      animation: fav 1s linear infinite;
      filter: blur(0.7px);
      @keyframes fav {
        0% {
          text-shadow: 0px 0px 4px white;
        }

        50% {
          text-shadow: 0px 0px 4px black;
        }

        100% {
          text-shadow: 0px 0px 4px white;
        }
      }
    }
  }
`;

function Card({
  name,
  species,
  gender,
  image,
  onClose,
  id,
  i,
  myFavorites,
  setMyFav,
  deleteMyFav,
}) {
  const [like, setLike] = useState(false);

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setLike(true);
      }
    });
  }, [myFavorites]);

  return (
    <Carta key={i} >
      <div className="header">
        <Link to={`/detail/${id}`}>
          <SpanSt>{name.length > 16 ? name.substring(0,15)+"..." : name}</SpanSt>
        </Link>
        <p
          onClick={(ele) => {
            if (!like) {
              setMyFav({
                id: id,
                name: name,
                species: species,
                gender: gender,
                image: image,
              });
              setLike(true);
            } else {
              setLike(false);
              deleteMyFav(id);
            }
          }}
          className={like ? "fav like" : "fav"}
        >
          {like ? "❤️" : "🤍"}
        </p>
        <Button
          onClick={(e) => {
            deleteMyFav(id);
            return onClose(id);
          }}
        >
          ❌
        </Button>
      </div>
      <Link className="ver" to={`/detail/${id}`}>
        <p>{"[ VER MAS"}</p>
      </Link>
      <Imgsty style={{ backgroundImage: `url(${image})` }}></Imgsty>
      <ContSt>
        <SpecSt>{species === "unknown" ? "Desconocido" : species}</SpecSt>
        <SpecSt>{gender === "unknown" ? "Desconocido" : gender}</SpecSt>
      </ContSt>
    </Carta>
  );
}
const mapStateToProps = (state) => ({
  myFavorites: state.myFavorites,
});

function mapDispatchToProps(dispatch) {
  return {
    setMyFav: (payload) => dispatch(setMyFav(payload)),
    deleteMyFav: (payload) => dispatch(deleteMyFav(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
