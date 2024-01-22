import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// USER REGISTRATION
const authCreate = getAuth();
createUserWithEmailAndPassword(authCreate, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });


//USER LOGIN
const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  //SIGN OUT
  const authOut = getAuth();
  signOut(authOut).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });

