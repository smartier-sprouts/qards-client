import Expo from 'expo';
import {AsyncStorage} from 'react-native';
import Keys from '../config/Keys';

export default async function gglLogin() {
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


// PATTERN FOR FURTHER GOOGLE AUTH INFO per https://docs.expo.io/versions/v17.0.0/sdk/google.html
// async function getUserInfo(accessToken) {
//   let userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
//     headers: { Authorization: `Bearer ${accessToken}`},
//   });
//   return userInfoResponse;
// }


 // let userObj = {
 //      uID:profile.id,
 //      firstName: profile.name.split(/\s/)[0],
 //      fullName: profile.name,
 //      isLoggedIn: true,
 //      expires: expirationDate,
 //      token: token
 //    };

 //    let jsonUserObj = JSON.stringify(userObj);

 //    AsyncStorage.setItem( 'asyncUserObj', jsonUserObj )
 //    .catch( (e) => { console.error('Something went wrong in saving! - ', e); } );
