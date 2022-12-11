import {
  SET_MYFAV,
  DELETE_MYFAV,
  SET_VALIDACION,
  SET_EXISTE,
  SET_CARGANDO,
  SET_SEARCHBAR,
  SET_BACK,
  SET_FILTER,
  SET_ALLCARD,
  SET_MYCARD,
  SET_ALLFAVORITES,
  DELETE_ALLFAVORITES,
  SET_ACTIVEFIL,
} from "./types";

const initialState = {
  allCard: [],
  myCard: [],
  allFavorites: [],
  myFavorites: [],
  validacion: false,
  existe: false,
  cargando: false,
  searchBar: { rendery: true, search: true, filter: false},
  back: false,
  filter: true,
  activeFil: {id:false, gender:false} 
  
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_MYFAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
      };
    case DELETE_MYFAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites.filter((ele) => ele.id !== payload)],
      };

    case SET_VALIDACION:
      return {
        ...state,
        validacion: payload,
      };
    case SET_EXISTE:
      return {
        ...state,
        existe: payload,
      };
    case SET_CARGANDO:
      return {
        ...state,
        cargando: payload,
      };

    case SET_SEARCHBAR:
      return {
        ...state,
        searchBar: payload,
      };
    case SET_BACK:
      return {
        ...state,
        back: payload,
      };
    case SET_FILTER:
      let aux;
      if (payload.id === "ascendente") {
        aux = [...state[payload.state]].sort((a, b) => a.id - b.id);
      } else if (payload.id === "descendente") {
        aux = [...state[payload.state]].sort((a, b) => b.id - a.id);
      } else if (payload.id === "none") {
        aux = [...state[payload.state]];
      } else if (payload.id === "male") {
        aux = [...state[payload.state]].filter((ele) => ele.gender === "Male");
      } else if (payload.id === "female") {
        aux = [...state[payload.state]].filter(
          (ele) => ele.gender === "Female"
        );
      } else if (payload.id === "desconocido") {
        aux = [...state[payload.state]].filter(
          (ele) => ele.gender === "unknown"
        );
      } else if (payload.id === "original") {
        aux = [...state[payload.state]]
      }

      return {
        ...state,
        [payload.mody]: aux,
      };
    case SET_ALLCARD:
      return {
        ...state,
        allCard: [...state.allCard, ...payload],
      };
    case SET_MYCARD:
      return {
        ...state,
        myCard: [...state.myCard, ...payload],
      };
    case SET_ALLFAVORITES:
      return {
        ...state,
        allFavorites: [...state.allFavorites, payload],
      };
    case DELETE_ALLFAVORITES:
      return {
        ...state,
        allFavorites: [
          ...state.myFavorites.filter((ele) => ele.id !== payload),
        ],
      };

      case SET_ACTIVEFIL: return {
        ...state,
        activeFil: payload
      };

    default:
      return state;
  }
};

export default reducer;
