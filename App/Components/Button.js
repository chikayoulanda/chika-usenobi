import React, {Component} from "react";
import { View, Text, TouchableOpacity, Image, Keyboard } from "react-native";

import styles from './styles/ButtonStyles';

class Button extends Component {

  onPress = () => {
    Keyboard.dismiss()
    this.props.onPress()
  }
  
  render () {
    const { disabled, buttonStyle, textStyle, text, image } = this.props
    return (
      <TouchableOpacity disabled={disabled} onPress={this.onPress}>
        <View style={{...styles.container, ...buttonStyle}}>
          {image &&
            <Image source={image} style={styles.image} />
          }
          <Text style={{...styles.text, textStyle}}>{text}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default Button;