import { put, select } from 'redux-saga/effects'
import { AuthSelectors } from '../Redux/AuthRedux'

// process STARTUP actions
export function * startup (api, action) {
  const account = yield select(AuthSelectors.account)
  console.tron.log('from startupsagas => ', account)
  if (account.payload) {
    if (account.payload.type === "SUCCESS") {
      if (account.payload.data.account) {
        api.api.setHeader('Authorization', `${account.payload.data.account.token}`)
      }
    }
  }
}
