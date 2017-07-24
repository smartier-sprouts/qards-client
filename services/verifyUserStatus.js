import { AsyncStorage } from 'react-native';

export default async function verifyUserStatus(){
    const userData = await AsyncStorage.getItem('asyncUserObj')
                            .then( (data) => {
                              if (data) {
                                return JSON.parse(data);
                              } else {
                                return false;
                              }
                            })
                            .catch( (e) => console.error(e) );
    if (userData) {
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