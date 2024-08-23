// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

//Firebase Config values imported from .env file
const firebaseConfig = {
  apiKey: "AIzaSyCSOq-TpL66cR3J3ACJ1--biptV4T19glo",
  authDomain: "salubermd-app.firebaseapp.com",
  projectId: "salubermd-app",
  storageBucket: "salubermd-app.appspot.com",
  messagingSenderId: "541093936504",
  appId: "1:541093936504:web:2081ab60d593c3d7951c8d"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: './logo.png',
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});