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

export const setMyFav = (payload) => ({
  type: SET_MYFAV,
  payload: payload,
});
export const deleteMyFav = (payload) => ({
  type: DELETE_MYFAV,
  payload: payload,
});

export const set_Validacion = (payload) => ({
  type: SET_VALIDACION,
  payload: payload,
});
export const set_Existe = (payload) => ({
  type: SET_EXISTE,
  payload: payload,
});
export const set_Cargando = payload => ({
  type: SET_CARGANDO,
  payload
})
export const set_SearchBar = (payload) => ({
  type: SET_SEARCHBAR,
  payload,
});
export const set_Back = (payload) => ({
  type: SET_BACK,
  payload,
});
export const set_Filter = (payload) => ({
  type: SET_FILTER,
  payload,
});
export const set_AllCard = (payload) => ({
  type: SET_ALLCARD,
  payload,
});
export const set_MyCard = (payload) => ({
  type: SET_MYCARD,
  payload,
});
export const set_AllFavorites = (payload) => ({
  type: SET_ALLFAVORITES,
  payload,
});
export const delete_AllFavorites = (payload) => ({
  type: DELETE_ALLFAVORITES,
  payload: payload,
});
export const setActivefil = (payload) => ({
  type: SET_ACTIVEFIL,
  payload: payload,
});