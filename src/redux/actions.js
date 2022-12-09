import { SET_MYFAV, DELETE_MYFAV, SET_VALIDACION, SET_EXISTE, SET_CARGANDO, SET_SEARCHBAR, SET_BACK } from "./types";

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