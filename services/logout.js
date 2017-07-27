import {AsyncStorage} from 'react-native';

export default async function logout(){
    console.log('Logout Called');
    const earlier = new Date("2000/01/01");

    let infoObj = {
      uID:"",
      firstName: "",
      fullName: "",
      isLoggedIn: false,
      expires: earlier,
      token: null,
    }

    let jsonUserObj = JSON.stringify(infoObj);

    AsyncStorage.setItem( 'asyncUserObj', jsonUserObj )
    .then( () => { console.log('On LOGOUT asyncUserObj saved as ', jsonUserObj) })
    .catch( (e) => { console.error('Something went wrong in saving! - ', e); } );

  }