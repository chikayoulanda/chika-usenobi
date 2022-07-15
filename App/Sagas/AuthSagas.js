import { persistStore } from 'redux-persist';
import { call, put, all, actionChannel} from 'redux-saga/effects'
import AuthActions from '../Redux/AuthRedux'

let alreadySignout = false

export function* signin(api, action) {
  let { data } = action
  console.log("data", data)
  const response = yield call(api.signIn, data)

  alreadySignout = false

  console.log('response signin =>', response, 'api => ', api)
  if (response.ok) {
    yield put(AuthActions.signinSuccess(response))   
  } else {
    yield put(AuthActions.signinFailure(response))
  }
}


export function* signout(api, action) {
  let { data, type } = action

  alreadySignout = true

  console.tron.log('signput')
}