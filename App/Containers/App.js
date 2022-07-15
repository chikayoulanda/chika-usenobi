import React, { Component } from 'react'
import { View, Text } from "react-native";
// import codePush from "react-native-code-push";

import '../Config'
import DebugConfig from '../Config/DebugConfig'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import RootContainer from './RootContainer'
import createStore from '../Redux'

// import * as Sentry from "@sentry/react-native";
// if (!__DEV__) {
//   Sentry.init({
//     dsn: Config.SENTRY_URL,
//   });
//   console.log('Config.SENTRY_URL', Config.SENTRY_URL)
// }

// create our store
const { persistor, store } = createStore()

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // codepushStatus: '',
      // codepushProgressUpdate: 0,
      // codepushDialog: false,
    }
  }

  componentDidMount() {
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
  }
  
  render () {
    // const { codepushStatus, codepushProgressUpdate, codepushDialog, } = this.state
    return (
      <Provider store={store}>
        <PersistGate 
          loading={null}
          onBeforeLift={() => console.log('LOADING PERSIST GATE DONE')}
          persistor={persistor}>
          <RootContainer />
        </PersistGate>
      </Provider>
    )
  }
}

// allow reactotron overlay for fast design in dev mode
// export default DebugConfig.useReactotron
//   ? console.tron.overlay( codePush(App))
//   :  codePush(App)
export default DebugConfig.useReactotron
  ? console.tron.overlay( App )
  :  App
