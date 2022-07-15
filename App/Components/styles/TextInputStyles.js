import { StyleSheet } from "react-native";
import { Colors } from "../../Themes";

export default StyleSheet.create({
  container: {
    paddingVertical: 12,
  },
  label: {
    fontSize: 16,
    color: Colors.darkWhite,
    paddingBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.darkNavy,
    paddingRight: 10,
  },
  iconLeft: {
    marginLeft: 12
  },
  iconRight: {
    padding: 12
  },
  inputText: {
    paddingLeft: 15,
    color: Colors.darkWhite,
    height: 'auto'
  },
  errorText: {
    fontSize: 12,
    color: Colors.yellow,
    fontStyle: 'italic',
  }
})