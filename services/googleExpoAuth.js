import Expo from 'expo';
import { AsyncStorage } from 'react-native';
import Keys from '../config/Keys';


// User MUST have Chrome installed for this to work!!!!
  const loginToGoogle = async function() {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: Keys.GOOGLE_ANDROID_CLIENT_ID,
        iosClientId: Keys.GOOGLE_IOS_CLIENT_ID,
        behavior:'web',
        scopes: ['profile', 'email']
      });
      if (result.type === 'success') {
        return result;
      } else { return {cancelled: true}; }
    } catch(err) { return { error: true}; }
  }

  const ninetyDaysInTheFuture = function() {
    let today = new Date();
    let q = new Date(today.getTime() + (90*24*60*60*1000) ); // 90days/hrs/min/sec/ms
    return q;
  }

  const gglLogin = async function() {
    try{
      const googleResObj = await loginToGoogle();
      const gUser = googleResObj.user;

      const userObj = {
        uID: gUser.id,
        firstName: gUser.givenName,
        fullName: gUser.name,
        isLoggedIn: true,
        expires: ninetyDaysInTheFuture(),
        token: googleResObj.accessToken,
        source: 'Google'
      };

      let jsonUserObj = JSON.stringify(userObj);

      AsyncStorage.setItem( 'asyncUserObj', jsonUserObj )
      // .then( () => { console.log('GoogleUserObj Saved as ', jsonUserObj) })
      .catch( (err) => { console.error('Something went wrong in saving async user data - ', err); } );
    } catch(err) { console.error('Something went wrong in ggl login - ', err); }
  }

export default gglLogin;

// Response pattern from Google:
  // Object {
  // "accessToken": "gobbledy.g00k-xyzabvc",
  // "idToken": "gobbledy.g00k-xyzabvc",
  // "refreshToken": "gobbledy.g00k-xyzabvc",
  // "serverAuthCode": "gobbledy.g00k-xyzabvc",
  // "type": "success",
  // "user": Object {
  //   "email": "me@poop.com",
  //   "familyName": "LastName",
  //   "givenName": "FirstName",
  //   "id": "107607094503295131868",
  //   "name": "FirstName LastName",
  //   "photoUrl": "https://lh3.googleusercontent.com/gobbledy.g00k-xyzabvc/photo.jpg",
  //   }
  // }
