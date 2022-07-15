import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getScrollPosition: ['data'],
})

export const ScrollTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  position: 0,
})

/* ------------- Selectors ------------- */

export const ScrollSelectors = {
  postion: state => state.scroll,
}

/* ------------- Reducers ------------- */

export const getScrollPosition = (state, { data }) => {
  return state.merge({ ...state, postion: { ...state.postion, data } })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_SCROLL_POSITION]: getScrollPosition,
})
