import React from "react";
import { View, SafeAreaView,  } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles/LayoutStyles';
import { Colors } from "../Themes";
import ButtonTab from "./ButtonTab";

class Layout extends React.Component {
  render() {
    const {bottomTab} = this.props
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.view}>
          {this.props.children}
        </View>
        {bottomTab &&
          <ButtonTab {...this.props} />
        }
      </SafeAreaView>
    )
  }
}

export default Layout;