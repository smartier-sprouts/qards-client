/* user authenticationProcess */
import React from 'react';
import Expo from 'expo';
import {AsyncStorage} from 'react-native';

import Keys from '../config/Keys';
import * as firebase from 'firebase'


  const authenticate = (token) => {
    const provider = firebase.auth.FacebookAuthProvider
    const credential = provider.credential(token)
    return firebase.auth().signInWithCredential(credential);
  }

  const fbFirebaseAuth = async () => {
    const APP_ID = Keys.FACEBOOK_APP_ID;
    const options = { permissions: ['public_profile', 'email'] }

    const {type, token, expires} = await Expo.Facebook.logInWithReadPermissionsAsync(APP_ID, options);

    if (type === 'success') {
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`)
      const profile = await response.json();
      const expirationDate = new Date(expires*1000);
      authenticate(token);


      let userObj = {
        uID:profile.id,
        firstName: profile.name.split(/\s/)[0],
        fullName: profile.name,
        isLoggedIn: true,
        expires: expirationDate
      };

      let jsonUserObj = JSON.stringify(userObj);

      await AsyncStorage.setItem( 'asyncUserObj', jsonUserObj )
      .catch( (err) => { console.error('Err AsyncSaving Fbook User Data:- ', err); } );
    }
  }

export default fbFirebaseAuth;