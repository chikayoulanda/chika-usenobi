import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Colors, Images } from "../Themes";

class ButtonTab extends React.Component {
  constructor(props){
    super(props)
    this.state={
      tab1: true,
      tab2: false,
    }
  }

  render() {
    const {onPressList, screen, onPressDeposit} = this.props

    return (
      <View style={{flexDirection: 'row', width: "100%", height: 40, alignItems: 'center', marginBottom: 15, backgroundColor: Colors.black}}>
        <View style={{width: "50%", alignItems: 'center'}}>
          <TouchableOpacity onPress={onPressList}>
            <Image source={screen === "list" ? Images.chartWhite : Images.chartGrey} style={{width: 30, height: 30, resizeMode: 'contain'}} />
          </TouchableOpacity>
        </View>
        <View style={{width: "50%", alignItems: 'center'}}>
        <TouchableOpacity onPress={onPressDeposit}>
          <Image source={screen === "deposit" ? Images.logoColor : Images.logoWhite} style={{width: 30, height: 30, resizeMode: 'contain', tintColor: screen === "list" ? Colors.grey : null}} />
        </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default ButtonTab;