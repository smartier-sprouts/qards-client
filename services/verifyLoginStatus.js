import { AsyncStorage } from 'react-native';

export default async function verifyLoginStatus() {
  const userData = await AsyncStorage.getItem('asyncUserObj')
                        .then( (data) => {
                          if (data) {
                            return JSON.parse(data);
                          } else {
                            return false;
                          }
                        })
                        .catch( (err) => console.error(err) );
  if (userData) {
    console.log('Verifying User Data based on:', userData);
    const expirationDate = Date.parse(userData.expires);
    if ( userData.token && ( expirationDate > new Date()) ) {
      return true;
    } else {
      userData.isLoggedIn = false;
      AsyncStorage.setItem('asyncUserObj',JSON.stringify(userData))
                  .then(()=>{ return false; })
                  .catch((e)=>{console.error(e);});
      }
    }

  return false;    //fallthrough
}