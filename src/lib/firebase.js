import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut, sendEmailVerification, updateProfile } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";
import { getFirestore, collection, addDoc, query, onSnapshot, orderBy, doc, deleteDoc, updateDoc, Timestamp, getDoc, arrayRemove, arrayUnion } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js";

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
      likes: [],
      recom: [],
      likesCounter: 0,
      recomCounter: 0,
      datePost: Timestamp.fromDate(new Date()),
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
      const user = userCredential.user;
      updateProfile(auth.currentUser, {
        displayName: name,
      });
      // ...
      addUserData(auth.currentUser.uid, name);
      if (user != null) {
        sendEmailVerification(auth.currentUser)
          .then(() => {
            alert('Ingresa a tu correo y verifica tu email');
          })
          .catch((error) => {
          });
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

// Ingresar al usuario
export const loginUser = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.hash = '#/nav';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('por favor ingresa tus datos correctamente');
      window.location.hash = '#/login';
    });
};
// función para cerrar sesión
export const out = () => {
  signOut(auth)
    .then(() => {
      window.location.hash = '#/login';
    })
    .catch((error) => {
      console.log(error);
    });
};

// función observador
export const onAuth = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      window.location.hash = '#/nav';
      const userId = user.uid;
    } else if (!user) {
      out();
    }
  });
};

// Ingreso con Google
export const inGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      window.location.hash = '#/nav';
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      window.location.hash = '#/login';
    });
};

// función para publicar el post en pantalla
export const publishPost = (nameCollection, callback) => {
  const q = query(collection(db, nameCollection), orderBy('datePost', 'desc'));
  onSnapshot(q, (querySnapshot) => {
    const posts = [];
    querySnapshot.forEach((_doc) => {
      posts.push({ ..._doc.data(), id: _doc.id });
    });
    callback(posts);
  });
};

// función para eliminar post
export const deletePost = async (postId) => {
  const isConfirm = window.confirm('¿Seguro quieres eliminar tu post?');
  if (isConfirm) {
    await deleteDoc(doc(db, 'post', postId));
  }
};

// Para editar Post
export const editTemplate = async (postId) => {
  const isConfirm = window.confirm('¿Seguro quieres editar tu post?');
  if (isConfirm) {
    const postEdit = doc(db, 'post', postId);
    await updateDoc(postEdit, {
      userName: auth.currentUser.displayName,
      userId: auth.currentUser.uid,
      idPost: postId,
      userPost: document.getElementById('textPostInputEdit').value,
    });
  }
};

// Para dar like
export const updateLikes = async (id) => {
  const userIdentifier = auth.currentUser.uid;
  const postRef = doc(db, 'post', id);
  const docSnap = await getDoc(postRef);
  const postData = docSnap.data();
  const likesCount = postData.likesCounter;

  if ((postData.likes).includes(userIdentifier)) {
    await updateDoc(postRef, {
      likes: arrayRemove(userIdentifier),
      likesCounter: likesCount - 1,
    });
  } else {
    await updateDoc(postRef, {
      likes: arrayUnion(userIdentifier),
      likesCounter: likesCount + 1,
    });
  }
};

// Para recomendar
export const updateRecom = async (id, userIdentifier) => {
  const postRef = doc(db, 'post', id);
  const docSnap = await getDoc(postRef);
  const postData = docSnap.data();
  const recomCount = postData.recomCounter;

  if ((postData.recom).includes(userIdentifier)) {
    await updateDoc(postRef, {
      recom: arrayRemove(userIdentifier),
      recomCounter: recomCount - 1,
    });
  } else {
    await updateDoc(postRef, {
      recom: arrayUnion(userIdentifier),
      recomCounter: recomCount + 1,
    });
  }
};
