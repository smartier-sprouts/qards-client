/* user authenticationProcess */
import Expo from 'expo';
import {AsyncStorage} from 'react-native';
import Keys from '../config/Keys';
import store from 'react-native-simple-store';

export default async function fbLogin() {
  const { type, token, expires } = await Expo.Facebook.logInWithReadPermissionsAsync(Keys.FACEBOOK_APP_ID, {
    permissions: ['public_profile','email']
  });

  if (type === 'success') {
    const expirationDate = new Date(expires*1000);
    // token is a string giving the access token to use with Facebook HTTP API requests.
    // expires is the time at which this token will expire, as seconds since epoch.
    const response = await fetch( `https://graph.facebook.com/me?access_token=${token}` );
    const profile = await response.json();
      console.log( 'resp:::--> ', profile);


    let infoObj = {
      uID:profile.id,
      firstName: profile.name.split(/\s/)[0],
      fullName: profile.name,
      isLoggedIn: true,
      expires: expirationDate,
      token: token,
      crazyURL: profile.url
    }
    let jsonUserObj = JSON.stringify(infoObj);

    AsyncStorage.setItem( 'asyncUserObj', jsonUserObj )
    .then( ()=> { store.save('storeUserObj',jsonUserObj) })
    .catch( (e) => { console.error('Something went wrong in saving! - ', e); } );
  }
}

// LOG OF SUCCESSFUL FACEBOOK CALL:
// 21:29:05: Hi Rich Werden!
// 21:29:05: Response {
//   "_bodyInit": "{\"name\":\"Rich Werden\",\"id\":\"10214257205773538\"}",
//   "_bodyText": "{\"name\":\"Rich Werden\",\"id\":\"10214257205773538\"}",
//   "bodyUsed": true,
//   "headers": Headers {
//     "map": Object {
//       "access-control-allow-origin": Array ["*", ],
//       "cache-control": Array ["private, no-cache, no-store, must-revalidate", ],
//       "content-length": Array ["47", ],
//       "content-type": Array ["text/javascript; charset=UTF-8", ],
//       "date": Array ["Sat, 22 Jul 2017 04:29:05 GMT", ],
//       "etag": Array ["\"2e1525ac2e99e7e54bda69b0592d361a006401be\"", ],
//       "expires": Array ["Sat, 01 Jan 2000 00:00:00 GMT", ],
//       "facebook-api-version": Array ["v2.10", ],
//       "pragma": Array ["no-cache", ],
//       "x-fb-debug": Array ["UwjQE87Gx3jr4/xb9UEK41/g70aIIWt2Dk+AXVe7bPaEsgMxf8VPzIuMovOR/lRCuH2YEnvHlfwgu65DbIGZWQ==", ],
//       "x-fb-rev": Array ["3172998", ],
//       "x-fb-trace-id": Array ["BNxRVBB0FRY", ],
//     },
//   },
//   "ok": true,
//   "status": 200,
//   "statusText": undefined,
//   "type": "default",
//   "url": "https://graph.facebook.com/me?access_token=EAAB4wBKSqAoBACF9vm6GcoCTpZBl0PEsmap0NJDWDP6IsBwivO0ltSfcgRWQSaBZAdC7ZCN3VWExaYbNTIs4WSzduOhSLPjY2q0wqadm3CE1M6ZCpsKkGZCZB7j4HxulVyXPNe9aFdOMc9YzKThaBXGjHIaZA8K76YZD",
// }]
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// async function logIn() {
//   const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('<APP_ID>', {
//       permissions: ['public_profile'],
//     });
//   if (type === 'success') {
//     // Get the user's name using Facebook's Graph API
//     const response = await fetch(
//       `https://graph.facebook.com/me?access_token=${token}`);
//     Alert.alert(
//       'Logged in!',
//       `Hi ${(await response.json()).name}!`,
//     );
//   }
// }
