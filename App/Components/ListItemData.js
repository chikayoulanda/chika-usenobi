import React, {Component} from "react";
import { View, Text, Image } from "react-native";

class ListItemData extends Component {

  onPress = () => {
    Keyboard.dismiss()
    this.props.onPress()
  }
  
  render () {
    const { data} = this.props
    console.log("datattata", data)
    return (
      
      <View style={{flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 5}}>
        <View style={{flexDirection: 'row'}}>
          <Image source={{uri: data.image}} style={{width: 10, height: 10, resizeMode: 'contain'}} />
          <Text>{data.ticker}</Text>
        </View>
        <Text>sdbjksadbakjdskbajsdb</Text>
      </View>
    )
  }
}

export default ListItemData;