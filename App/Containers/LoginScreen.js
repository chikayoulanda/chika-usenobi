import React from "react";
import { View, Image} from "react-native";
import { connect } from "react-redux";
import Layout from "../Components/Layout";
import {Colors, Images} from '../Themes';
import InputText from "../Components/TextInput";
import Button from "../Components/Button";
import { setAppInitialize } from '../Lib/storage'
import { CommonActions } from '@react-navigation/native';

import ListAcions from '../Redux/ListRedux';
import AuthActions from '../Redux/AuthRedux';
import styles from './styles/LoginScreenStyles';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidePassword: true,
      email: '',
      password: '',
      isError: false,
      isLoading: false,
      currentInstance: this,
    }
    this.signin = false
  }

  static getDerivedStateFromProps(props, state) {
    const {account, navigation} = props
    const {currentInstance} = state

    let returnValue = {}

    if(!account.fetching && currentInstance.signin) {
      console.log("data loh", account)
      if(account.payload && account.payload.data) {
        if (account.payload.data.status == "ok") {
          returnValue = {
            isError: false
          }
          currentInstance.signin = false

          setAppInitialize(true).then(() => {
            currentInstance.signin = false
            // currentInstance.props.getList()
            const resetAction = CommonActions.reset({
              index: 0,
              routes: [
                { name: 'DashboardScreen' },
              ],
            })
            navigation.dispatch(resetAction)
          })

        }
      } else {
        returnValue = {
          isError: true
        }
      }
    }

    return {
      ...returnValue
    }
  }

  onClickLogin = () => {
    const {email, password} = this.state
    let data = {
      email: email,
      password: password,
    }
    this.signin = true
    this.props.login(data)  
  }

  render () {
    const {hidePassword, email, password, isError, isLoading} = this.state
    const disabled = email === '' || password === ''|| isLoading ? true : false

    return (
      <Layout>
        <View style={styles.container}>
          <View style={{height: 30, alignItems: 'center', justifyContent: 'center', marginBottom: 20}}>
            <Image source={Images.logo} style={styles.image} />
          </View>
          <InputText
            label={"E-mail Address"}
            placeholder={"Enter email address"}
            isError={isError}
            value={email}
            onChangeText={(email) => this.setState({email})}
            errorText={"Invalid E-mail Address"}
          />
          <InputText
            label={"Password"}
            placeholder={"Enter password"}
            isError={isError}
            value={password}
            secureTextEntry={hidePassword}
            onChangeText={(password) => this.setState({password})}
            iconRight={Images.eye}
            onPressIconRight={() => this.setState({hidePassword: !hidePassword})}
            errorText={"Invalid Password"}
          />
        </View>
        <Button
          disabled={disabled}
          text={"Login"}
          buttonStyle={{backgroundColor: disabled ? Colors.grey : Colors.blue}}
          onPress={() => this.onClickLogin()}
        />
      </Layout>
    )
  }
}

const mapStateToProps = (state) => ({
  account: state.auth.account,
})

const mapDispatchToProps = (dispatch) => {
  return {
    login: (params) => dispatch(AuthActions.signinRequest(params)),
    getList: (params) => dispatch(ListAcions.getListRequest(params)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (LoginScreen);