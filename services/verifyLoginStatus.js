import { AsyncStorage } from 'react-native';

export default async function verifyLoginStatus(cb) {
  await AsyncStorage.getItem('asyncUserObj')
          .then( (data) => {
            if (data) {
              return JSON.parse(data);
            } else {
              return false;
            }
          })
          .then( (userData) => {
            if (userData){
              console.log('Verifying LoginStatus based on:', userData);
              const expirationDate = Date.parse(userData.expires);
              if ( expirationDate > new Date() ) {
                return true;
              }
            }
            return false;
          })
          .then( (result) => {
            cb(result);
          })
          .catch( (err) => { console.error('Error in User Validation:',err) })
}