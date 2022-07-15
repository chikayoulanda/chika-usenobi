import React, { useEffect, Fragment } from 'react'
import { View, StatusBar } from 'react-native'
import AppNavigation from '../Navigation/AppNavigation'
// import { useDispatch, useSelector } from 'react-redux'
// import { Settings } from 'react-native-fbsdk-next';

// Styles
// import styles from './Styles/RootContainerStyles'

function RootContainer() {

  return (
    <Fragment>
      <View style={{flex: 1}}>
        <StatusBar barStyle='light-content' />
        <AppNavigation />
      </View>
    </Fragment>
  )
}

export default RootContainer;