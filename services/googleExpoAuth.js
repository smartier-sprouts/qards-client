import Expo from 'expo';
import Keys from '../config/Keys';

module.exports = async function() {
  try {
    const result = await Expo.Google.logInAsync({
      androidClientId: Keys.GOOGLE_ANDROID_CLIENT_ID,
      iosClientId: Keys.GOOGLE_IOS_CLIENT_ID,
      scopes: ['profile', 'email'],
    });

    if (result.type === 'success') {
      console.log('rAcssTkn',result.accessToken);
      console.log('/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/');//
      console.log('resBody',result.body);
      console.log('/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/');//
      console.log('FULL',result);
      return result.accessToken;
    } else {
      return {cancelled: true};
    }
  } catch(e) {
    return {error: true};
  }
}