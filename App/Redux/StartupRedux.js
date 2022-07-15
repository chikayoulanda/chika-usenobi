import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  initToken: ['data'],
})

export const StartupTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  token: null,
})

/* ------------- Selectors ------------- */

export const StartupSelectors = {
  token: state => state.startup,
}

/* ------------- Reducers ------------- */

export const initToken = (state, { data }) => {
  return state.merge({ ...state, token: { ...state.token, fetching: true, data } })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.INIT_TOKEN]: initToken,
})
