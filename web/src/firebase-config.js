/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyA-MY70WQ8yD_5mYw9_IjcEB0auNhXjMkI",
  authDomain: "friendlychat-d02e5.firebaseapp.com",
  projectId: "friendlychat-d02e5",
  storageBucket: "friendlychat-d02e5.appspot.com",
  messagingSenderId: "144778808267",
  appId: "1:144778808267:web:8a80453d0d47f1f83fc44e"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}