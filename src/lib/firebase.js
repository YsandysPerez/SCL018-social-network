import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, query, onSnapshot, orderBy } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: 'AIzaSyAKJpPxVNOXhZin5_nCQjc9B1VhBSlZ87E',
  authDomain: 'social-network-book-love-20980.firebaseapp.com',
  projectId: 'social-network-book-love-20980',
  storageBucket: 'social-network-book-love-20980.appspot.com',
  messagingSenderId: '710537664195',
  appId: '1:710537664195:web:877ad39cd69baf06a1b476',
  measurementId: 'G-NQ7QT7P39Y',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Registrar al usuario
export const createUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log('Funcionó');
      // ...
      if (user != null) {
        sendEmailVerification(auth.currentUser)
          .then(() => {
            // onVerifyEmailSent();
            // Email verification sent!
            // ...
            console.log('correo enviado!');
            alert('Ingresa a tu correo y verifica tu email para poder acceder');
          })
          .catch((error) => {
            console.log('correo NO enviado!');
          });
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

// Ingresar al usuario
export const loginUser = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      console.log('si si si');
      window.location.hash = '#/nav';
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('por favor ingresa tus datos correctamente');
      window.location.hash = '#/login';
    });
};
export const onAuth = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log('auth: logeado');
      // window.location.hash = '#/nav';
      // ...
    } else {
      // User is signed out
      // ...
      console.log('no logeado');
      window.location.hash = '#/login';
    }
  });
};

// Ingreso con Google
export const inGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
    // ...
    }).catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};
const db = getFirestore(app);

/* try {
  const docRef = await addDoc(collection(db, "post"), {
    first: "Ysa",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Alan",
    middle: "Mathison",
    last: "Turing",
    born: 1912
  });

  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
}); */


// Add a new document with a generated id.
export async function addPost(variable) {
  try {
    const docRef = await addDoc(collection(db, 'post'), {
      userPost: variable,
      datePost: Date(Date.now()),
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

/* export async function publishPost(nameCollection) {
      // const arrayPost = [];
      try {
        return await getDocs(collection(db, nameCollection));
      //
      // return postCollection;
      } catch (e) {
        console.error('Error adding document: ', e);
      }
} */
export const publishPost = (nameCollection, callback) => {
  const q = query(collection(db, nameCollection), orderBy('datePost', 'desc'));
  onSnapshot(q, (querySnapshot) => {
    const posts = [];
    querySnapshot.forEach((doc) => {
      posts.push(doc.data().userPost);
    });
    callback(posts);
    // console.log(posts);
  });
};

export const out = () => {
  const auth = getAuth();
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
};
