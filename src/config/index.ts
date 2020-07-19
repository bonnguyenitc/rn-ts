import env from 'react-native-config'
import { Platform } from 'react-native'

const config = {
  api: {
    host: env.API_HOST,
    timeout: 20000
  }
};

const iOS = Platform.OS === 'ios'
const Android = Platform.OS === 'android'

const OS = {
  iOS,
  Android
}

const API_HOST = config.api.host;

export {
  API_HOST,
  OS
}

export default config