import React  from "react";
import { View, Text, Image, Flatlist, TouchableOpacity, ScrollView} from "react-native";
import { CommonActions } from '@react-navigation/native';
import Layout from "../Components/Layout";
import InputText from "../Components/TextInput";
import ListItemData from "../Components/ListItemData";
import Button from "../Components/Button";
import { Colors, Images } from "../Themes";
import { setAppInitialize } from '../Lib/storage'
import { connect } from "react-redux";
import ListAcions from '../Redux/ListRedux';
import AuthActions from '../Redux/AuthRedux'

class DashboardScreen extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        search: '',
        screen: 'deposit',
        isLoading: false,
        listData: [],
        currentInstance: this
      }
      this.getList = false
  }

  componentDidMount () {
    this.props.getList()
    this.getList = true
  }

  static getDerivedStateFromProps(props, state) {
    const {list, navigation} = props
    const {currentInstance} = state

    let returnValue = {}

    if(!list.fetching && currentInstance.getList) {
      console.log("data listnya", list)
      if(list.payload && list.payload.data) {
        if (list.payload.data.status == "ok") {
          returnValue = {
            listData: list.payload.data.data
          }
          currentInstance.getList = false
        }
      } else {
        returnValue = {
          listData: []
        }
        currentInstance.getList = false
      }
    }

    return {
      ...returnValue
    }
  }

  onClickTab = (data) => {
    this.setState({screen: data})
  }

  onClickDeposit = () => {
    this.setState({isLoading: true})
    setTimeout(() => {
      this.setState({isLoading: false})
    }, 5000)
  }

  onSearch = (item) => {
    const {listData, search} = this.state
    
    setTimeout(() => {
      console.log("data newList", search)
      // this.setState({isLoading: false})
      let newList = listData.find(el => el.ticker === search)
      this.setState({listData: newList})
    }, 1000)
  }

  onLogout = () => {
    setAppInitialize(false).then(() => {
      this.props.signout()
      const resetAction = CommonActions.reset({
        index: 0,
        routes: [
          { name: 'AuthScreen' },
        ],
        key: null
      })
      this.props.navigation.dispatch(resetAction)
    })
  }

  render() {
    const {search, screen, isLoading, listData} = this.state

    return (
      <Layout 
        bottomTab={true} 
        screen={screen}
        onPressList={() => this.onClickTab("list")}
        onPressDeposit={() => this.onClickTab("deposit")}
      >
        {screen === "list" ?
        <>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          <View style={{width: "10%", alignItems: "flex-start"}}>
            <TouchableOpacity>
              <Image source={Images.back} style={{width: 30, height: 30, resizeMode: 'contain', marginLeft: -10}} />
            </TouchableOpacity>
          </View>
          <View style={{width: "90%"}}>
            <InputText
              placeholder={"Search"}
              value={search}
              onChangeText={(search) => {this.setState({search: search}), this.onSearch()}}
              containerStyle={{height: 40, fontSize: 12, width: "100%"}}
              iconLeft={Images.search}
            />
          </View>
        </View>
        <ScrollView>
        {listData && listData.length > 0  && listData.map((item, index) => {
          let number = parseFloat(item.amount)
          return (
            <View key={index} style={{flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: Colors.darkWhite}}>
              <View style={{flexDirection: 'row', alignItems: "center"}}>
                <Image source={{uri: item.image}} style={{width: 20, height: 20, resizeMode: 'contain'}} />
                <Text style={{paddingLeft: 10, fontWeight: 'bold', color: Colors.white, fontSize: 16}}>{item.ticker}</Text>
              </View>
              <Text>{number.toFixed(8)}</Text>
            </View>
          )
        })
        }
        </ScrollView>
        </>
        :
        <>
        <View style={{flex: 1}}>
          <View style={{alignItems: 'center'}}>
            <Image source={Images.ads} style={{width: "100%", height: 100, resizeMode: 'contain'}} />
            <View style={{flexDirection: 'row', paddingTop: 20}}>
              <Text style={{color: Colors.darkWhite}}>24H Changes </Text>
              <Text style={{color: Colors.green}}>+ 11.34%</Text>
            </View>
            <Text style={{fontSize: 40, padding: 10, color: Colors.white}}>$3.79</Text>
          </View>
          <Button
            disabled={isLoading}
            text={"Deposit"}
            buttonStyle={{backgroundColor: isLoading ? Colors.grey : Colors.green,}}
            onPress={() => this.onClickDeposit()}
          />
        </View>
  
        <View style={{alignItems: 'center'}}>
          <Button
            text={"Sign Out"}
            buttonStyle={{backgroundColor: Colors.grey, width: 100}}
            onPress={() => this.onLogout()}
          />
        </View>
        </>}
        
      </Layout>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.list.list,
})

const mapDispatchToProps = (dispatch) => {
  return {
    signout: () => dispatch(AuthActions.signout()),
    getList: (params) => dispatch(ListAcions.getListRequest(params)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (DashboardScreen);