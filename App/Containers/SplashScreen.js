import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { connect } from 'react-redux';

import Layout from '../Components/Layout';
import styles from './styles/SplashScreenStyles';
import { Colors, Images } from '../Themes';
import { getAppInitialize } from '../Lib/storage'


export class SplashScreen extends Component {

  componentDidMount() {
    this.handleNavigation('LoginScreen')

    getAppInitialize().then((result) => {
      console.log("data result", result)
      if ((!result && !account.payload)) {
        this.handleNavigation('LoginScreen')
      } else {
        this.handleNavigation('DashboardScreen')
      }
    })
  }

  handleNavigation = (name) => {
    setTimeout(() => {
      const resetAction = CommonActions.reset({
        index: 0,
        routes: [
          { name },
        ],
      })
      this.props.navigation.dispatch(resetAction)
    }, 3000)
  }

  render() {
    console.log("spalsh")
    return (
      <Layout>
        <View style={styles.container}>
          <Image source={Images.logo} style={styles.logo} />
        </View>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => {
  return {
    getLesson: (params) => dispatch(ListAcions.getListRequest(params)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (SplashScreen);
