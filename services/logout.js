import { AsyncStorage } from 'react-native';

export default async function logout(){
    const earlier = new Date("2000/01/01");

    let infoObj = {
      uID:"",
      firstName: "ANONYMOUS",
      fullName: "NOT-Logged-In",
      isLoggedIn: false,
      expires: earlier,
      token: null,
      source: null
    }

    let jsonUserObj = JSON.stringify(infoObj);

    AsyncStorage.setItem( 'asyncUserObj', jsonUserObj )
    .then( () => { console.log('User Logged Out'); } )
    .catch( (err) => { console.error('Something went wrong in saving! - ', err); } );
  }
