import {
  SET_MYFAV,
  DELETE_MYFAV,
  SET_VALIDACION,
  SET_EXISTE,
  SET_CARGANDO,
  SET_SEARCHBAR,
  SET_BACK,
} from "./types";

const initialState = {
  myFavorites: [],
  validacion: false,
  existe: false,
  cargando: false,
  searchBar: true,
  back: false,
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
    default:
      return state;
  }
};

export default reducer;
