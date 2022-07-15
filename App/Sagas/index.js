import { takeLatest, all, take } from 'redux-saga/effects'
import API from '../Services/Api'
import AppConfig from '../Config/AppConfig'

/* ------------- Types ------------- */
import { StartupTypes } from '../Redux/StartupRedux'
import { ScrollTypes } from '../Redux/ScrollRedux'
import { ListTypes } from '../Redux/ListRedux'
import { AuthTypes } from '../Redux/AuthRedux'

/* ------------- Sagas ------------- */
import { startup } from './StartupSagas'
import { getList } from './ListSagas'; 
import { signin, signout } from './AuthSagas';

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = API.create(AppConfig.API_URL)

/* ------------- Connect Types To Sagas ------------- */
export default function * root () {
  yield all([
    takeLatest(StartupTypes.INIT_TOKEN, startup, api),
    takeLatest(AuthTypes.SIGNIN_REQUEST, signin, api),
    takeLatest(AuthTypes.SIGNOUT, signout, api),
    takeLatest(ScrollTypes.GET_SCROLL_POSITION, function* () { return null }, api),

    //Lesson
    takeLatest(ListTypes.GET_LIST_REQUEST, getList, api),
  ])
}
