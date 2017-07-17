This repo was started via the create-react-native-app setup. (Step 0 = Install dependencies with 'yarn install') CRNA Apps can **only** contain JS- _nothing native_ to independent platforms until 'ejected'.

# To Run The App:
* First open Genymotion or Android Studio's Emulator
* Launch with:
	* `yarn start` - Generically starts the development server so you can open your app in the Expo app on a phone.
	* `yarn run android`
  Starts the development server and attempts to loads your app on a connected Android device or emulator.

##Notes:
* Jake's App.js had a ref to [reactnavigation](https://reactnavigation.org/docs/intro/) so I left that in place
* Messed with [Reactotron](https://github.com/infinitered/reactotron) a bit and it looks promising so I included that in this repo
* If Redux is needed, at the moment there's an error on setup: `"react-redux@5.0.5" has unmet peer dependency "react@^0.14.0 || ^15.0.0-0 || ^16.0.0-0"` 


###expoMain script:
There is an extra package start script called _expoMain_. In putting this starter together between Jake's expo upload, the hr starter, and default react package.json(s), I encountered the following fork in the road:
The `main:` argument in the yarn\npm package.json differs between the expo and the create-react-native-app setups.

* create-react-native-app has a main set as >` "main": "./node_modules/react-native-scripts/build/bin/crna-entry.js",`

* Expo has the 'main' package.json arg set as >`"main": "./node_modules/expo/AppEntry.js"` 

As a result of this, I went with the crna method, but put the Expo version in as a script called `expoMain`.


(Expo's AppEntry.js itself literally only consists of the following:)`
import Expo from 'expo';
import App from '../../App';
Expo.registerRootComponent(App);
`