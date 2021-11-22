import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut, sendEmailVerification, updateProfile } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, query, onSnapshot, orderBy, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js";

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
const db = getFirestore(app);

// Función para crear la colección user-id
export const addUserData = async (userId, variable) => {
  try {
    const docRef = await addDoc(collection(db, 'user-data'), {
      id: userId,
      name: variable,
      // like: [],
      // recommended: [],
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

// Función para crear la colección post
export const addPost = async (variable) => {
  try {
    const docRef = await addDoc(collection(db, 'post'), {
      userName: auth.currentUser.displayName,
      userId: auth.currentUser.uid,
      userPost: variable,
      datePost: Date(Date.now()),
      // like: [],
      // recommended: [],
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

// Función para crear cuenta de usuario
export const createUser = (email, password, name) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(userCredential);
      updateProfile(auth.currentUser, {
        displayName: name,
      });
      // ...
      addUserData(auth.currentUser.uid, name);
      if (user != null) {
        sendEmailVerification(auth.currentUser)
          .then(() => {
            // onVerifyEmailSent();
            // Email verification sent!
            // ...
            // console.log(auth.currentUser.uid);
            // addUserData(auth.currentUser.uid, name);
            // Arreglo temporal
            /* const docRef = addDoc(collection(db, 'user-data'), {
              id: auth.currentUser.uid,
              userName: name,
              // like: [],
              // recommended: [],
            }); */

            // addUserData(auth.currentUser.id, name);
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
      // console.log('si si si');
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
// función observador
export const onAuth = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const userId = user.uid;
      // console.log(userId);
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
      window.location.hash = '#/nav';
    // ...
    }).catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      window.location.hash = '#/login';
      // ...
    });
};
// función para publicar nombre de usuarios
export const getCurrentUserData = (callback) => {
  const q = query(collection(db, 'user-data'));
  onSnapshot(q, (querySnapshot) => {
    const postsName = [];
    querySnapshot.forEach((doc) => {
      postsName.push(doc.data());
    });
    callback(postsName);
    console.log(postsName);
  });
};
// función para publicar el post en pantalla
export const publishPost = (nameCollection, callback) => {
  const q = query(collection(db, nameCollection), orderBy('datePost', 'desc'));
  onSnapshot(q, (querySnapshot) => {
    const posts = [];
    console.log(querySnapshot);
    querySnapshot.forEach((_doc) => {
      console.log(_doc.id);
      /* element['data'] = _doc.data();
      element['data']['id'] = _doc.id; */
      // posts.push(doc.data());
      console.log(_doc.id);
      console.log(_doc.data());
      posts.push({ ..._doc.data(), id: _doc.id });
      console.log(posts);
    });
    callback(posts);
  });
};
// función para cerrar sesión
export const out = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
};

// función para eliminar post
export const deletePost = async (postId) => {
  console.log(postId);
  const isConfirm = window.confirm('¿Seguro quieres eliminar tu post?');
  if (isConfirm) {
    await deleteDoc(doc(db, 'post', postId));
  }
};
