/* user authenticationProcess */
import Expo from 'expo';
import {AsyncStorage} from 'react-native';
import Keys from '../config/Keys';

export default async function fbLogin() {
    // token is a string giving the access token to use with Facebook HTTP API requests.
    // expires is the time at which this token will expire, as seconds since epoch.
  const baseRespObj = await Expo.Facebook.logInWithReadPermissionsAsync(Keys.FACEBOOK_APP_ID, {
    permissions: ['public_profile','email']
  });
  const { type, token, expires } = baseRespObj;

console.log(baseRespObj)

  if (type === 'success') {
    const expirationDate = new Date(expires*1000);
    const response = await fetch( `https://graph.facebook.com/me?access_token=${token}` );
    const profile = await response.json();

    let userObj = {
      uID:profile.id,
      firstName: profile.name.split(/\s/)[0],
      fullName: profile.name,
      isLoggedIn: true,
      expires: expirationDate,
      token: token
    };

    let jsonUserObj = JSON.stringify(userObj);

    AsyncStorage.setItem( 'asyncUserObj', jsonUserObj )
    .then( () => {console.log('on Facebook LOGIN asyncUserObj saved as', jsonUserObj) })
    .catch( (err) => { console.error('Err AsyncSaving Fbook User Data:- ', err); } );
  }
}