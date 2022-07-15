  import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  signout: ['payload'],

  signinRequest: ['data'],
  signinSuccess: ['payload'],
  signinFailure: ['error'],

})

export const AuthTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  account: { fetching: false, error: null, payload: null, data: null },
})

/* ------------- Selectors ------------- */

export const AuthSelectors = {
  account: state => state.auth.account,
}

/* ------------- Reducers ------------- */

export const signout = (state, props) => {
  return state.merge({ ...state, account: { fetching: null, error: null, payload: null, data: null } })
}

export const signinRequest = (state, { data }) => {
  return state.merge({ ...state, account: { ...state.account, fetching: true, data, }})
}

export const signinSuccess = (state, { payload }) => {
  return state.merge({ ...state, account: {  ...state.account, fetching: false, error: false, payload, }})
}

export const signinFailure = (state, { error }) => {
  return state.merge({ ...state, account: { ...state.account, fetching: false, error, }})
}



/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGNOUT]: signout,

  [Types.SIGNIN_REQUEST]: signinRequest,
  [Types.SIGNIN_SUCCESS]: signinSuccess,
  [Types.SIGNIN_FAILURE]: signinFailure,

})
