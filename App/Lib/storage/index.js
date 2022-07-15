import AsyncStorage from '@react-native-async-storage/async-storage'
import keys from './config'

export const getAppInitialize = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(keys.APP_INIT, (error, result) => {
      if (error) return reject(error)

      resolve(result)
    })
  })
}

export const setAppInitialize = (data) => {
  return new Promise((resolve, reject) => {
    if (!data) {
      AsyncStorage.removeItem(keys.APP_INIT)
      resolve(1)
    } else {
      AsyncStorage.setItem(keys.APP_INIT, JSON.stringify(data), (error) => {
        if (error) return reject(error)
  
        resolve(1)
      })
    }
  })
}