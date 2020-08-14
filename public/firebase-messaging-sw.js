importScripts("https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyA86WJrFqUvhHTY5HzyRa5skG8tjIKS78Q",
  authDomain: "test-worker-332ee.firebaseapp.com",
  databaseURL: "https://test-worker-332ee.firebaseio.com",
  projectId: "test-worker-332ee",
  storageBucket: "test-worker-332ee.appspot.com",
  messagingSenderId: "903310641948",
  appId: "1:903310641948:web:339d4aa583b51049b748d9",
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
