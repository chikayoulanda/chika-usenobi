// Simple React Native specific changes
import Config from 'react-native-config'

export default {
  // font scaling override - RN default is on
  allowTextFontScaling: true,
  API_URL: "http://backend.test.usenobi.com:8000",
  DEBUG_MODE: Config.DEBUG_MODE && Config.DEBUG_MODE === "true" ? true : false,

}
