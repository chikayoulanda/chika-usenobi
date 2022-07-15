import { StyleSheet } from "react-native";
import { Colors } from "../../Themes";

export default StyleSheet.create({
  container1: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between'
  },
  back: {
    width: 30, 
    height: 30, 
    resizeMode: 'contain', 
    marginLeft: -10
  },
  inputText1: {
    height: 40, 
    fontSize: 12, 
    width: "100%"
  },
  containerList: {
    flexDirection: "row", 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    paddingVertical: 10, 
    borderBottomWidth: 1, 
    borderBottomColor: Colors.darkWhite
  },
  ads: {
    width: "100%", 
    height: 100, 
    resizeMode: 'contain'
  },
})