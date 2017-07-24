/* user authenticationProcess */
import Expo from 'expo';
import Keys from '../config/Keys';
import {AsyncStorage} from 'react-native';
import store from 'react-native-simple-store';

export default async function gglLogin() {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: Keys.GOOGLE_ANDROID_CLIENT_ID,
        iosClientId: Keys.GOOGLE_IOS_CLIENT_ID,
        scopes: ['profile', 'email'],
      });

    if (result.type === 'success') {
      console.log(result);
      return result.accessToken;
    } else {
      console.error('Cancelled response.')
      return {cancelled: true};
    }
  } catch(e) {
    console.error('catch thrown for:', e);
    return {error: true};
  }
}


// Normal REST API per Expo Docs:
// async function getUserInfo(accessToken) {
//   let userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
//     headers: { Authorization: `Bearer ${accessToken}`},
//   });
//   return userInfoResponse;
// }
