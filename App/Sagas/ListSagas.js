import { call, put, all, select } from 'redux-saga/effects';
import ListActions from '../Redux/ListRedux';

export function * getList(api, action) {
  let {data} = action
  console.log("masuk sisn")

  const response = yield call(api.list, data)
  console.log("data list", response)
  if (response.ok) {
    yield put(ListActions.getListSuccess(response))
  } else {
    yield put(ListActions.getListFailure(response))
  }
}