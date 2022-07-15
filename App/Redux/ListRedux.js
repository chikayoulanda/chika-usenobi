import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getListRequest: ['data'],
  getListSuccess: ['payload'],
  getListFailure: ['error'],

})

export const ListTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  list: {fetching: false,  error: null, payload: null, data: null},
})

/* ------------- Selectors ------------- */

export const LessonSelectors = {
  list: state => state.list.list,
}

/* ------------- Reducers ------------- */


export const getListRequest = (state, {data}) => {
  return state.merge({ ...state, list: {...state.list, fetching: true, data}})
}
export const getListSuccess = (state, {payload}) => {
  return state.merge({ ...state, list: {...state.list, fetching: false, error: false, payload}})
}
export const getListFailure = (state, {error}) => {
  return state.merge({ ...state, list: {...state.list, fetching: false, error,}})
}


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_LIST_REQUEST]: getListRequest,
  [Types.GET_LIST_SUCCESS]: getListSuccess,
  [Types.GET_LIST_FAILURE]: getListFailure,
})