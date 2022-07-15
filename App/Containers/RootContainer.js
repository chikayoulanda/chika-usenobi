import React, { useEffect, Fragment } from 'react'
import { View, StatusBar } from 'react-native'
import AppNavigation from '../Navigation/AppNavigation'

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