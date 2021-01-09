// hi there

importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyCJVWI0GT82uddWNNpD1DzmW6MR5x_qxNY",
    authDomain: "ola-messages-int.firebaseapp.com",
    projectId: "ola-messages-int",
    storageBucket: "ola-messages-int.appspot.com",
    messagingSenderId: "558647687831",
    appId: "1:558647687831:web:d9c4ce2637ef61838b07d2"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
/*
messaging.setBackgroundMessageHandler(function(payload) {
  console.log('Received background message', payload);

  if(payload.data.active == 1){
    return false;
  }
  var notificationTitle = payload.data.title;
  var notificationOptions = {
    body: payload.data.body,
    icon: payload.data.icon,
    image: payload.data.image
  };

  return false;

//  return self.registration.showNotification(notificationTitle, notificationOptions);
});

/*
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
*/