import { StyleSheet } from "react-native";
import { Colors } from "../../Themes";

export default StyleSheet.create({
  container: {
    height: 40,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    color: Colors.white,
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 10,
  }
})