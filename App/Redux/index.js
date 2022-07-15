import { combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'
import ReduxPersist from '../Config/ReduxPersist'

/* ------------- Assemble The Reducers ------------- */
export const appReducer = combineReducers({
  auth: require('./AuthRedux').reducer,
  startup: require('./StartupRedux').reducer,
  scroll: require('./ScrollRedux').reducer,
  list: require('./ListRedux').reducer,
})

export const reducers = (state, action) => {
  if(action.type === 'SIGNOUT') {
    return appReducer(undefined, action)
  }
  return appReducer(state, action)
}

export default () => {
  let finalReducers = reducers
  // If rehydration is on use persistReducer otherwise default combineReducers
  if (ReduxPersist.active) {
    const persistConfig = ReduxPersist.storeConfig
    finalReducers = persistReducer(persistConfig, reducers)
  }

  let { store, sagasManager, sagaMiddleware } = configureStore(finalReducers, rootSaga)
  let persistor = persistStore(store)
  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers
      store.replaceReducer(nextRootReducer)

      const newYieldedSagas = require('../Sagas').default
      sagasManager.cancel()
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware(newYieldedSagas)
      })
    })
  }

  return { store, persistor }
}
