import React from "react";
import { View, TextInput, Text, Image, TouchableOpacity } from "react-native";
import styles from './styles/TextInputStyles';

class InputText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    const {label, isError, labelStyle, containerStyle, placeholder, iconLeft, iconRight, iconRightstyle, placeholderTextColor, onPressIconRight, errorText} = this.props
    return (
      <View style={styles.container}>
        {label &&
          <Text style={{...styles.label, ...labelStyle}}>{label}</Text>
        }
        <View style={styles.inputContainer}>
        {iconLeft &&
          <Image source={iconLeft} style={styles.iconLeft} />
        }
        <TextInput 
          {...this.props}
          style={{...styles.inputText, ...containerStyle}}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
        />
        {iconRight &&
          <TouchableOpacity onPress={onPressIconRight}>
            <Image source={iconRight} style={{...iconRightstyle}} />
          </TouchableOpacity>
        }
        </View>
        {isError &&
          <Text style={styles.errorText}>{errorText}</Text>
        }
      </View>
    )
  }
}

export default InputText;