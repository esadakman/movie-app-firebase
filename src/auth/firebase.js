import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import toast from "react-hot-toast";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);

export const register = async (email, password, displayName, navigate) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(auth.currentUser, { displayName: displayName });
    navigate("/");
    toast.success("Signed Up");
    return user;
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      toast.error("The email address is already in use");
    } else if (
      error.code === "auth/invalid-email" ||
      error.code === "auth/missing-email"
    ) {
      toast.error("The email address is not valid.");
    } else if (error.code === "auth/weak-password") {
      toast.error("Password should be at least 6 characters");
    } else {
      toast.error(error.message);
    }
  }
};

export const login = async (email, password, navigate) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    toast.success("Logged In");
    navigate("/");
    return user;
  } catch (error) {
    if (
      error.code === "auth/wrong-password" ||
      error.code === "auth/invalid-email"
    ) {
      toast.error("Your email or password is incorrect. \nPlease Try Again");
    } else {
      toast.error(error.message);
    }
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    toast.success('"logged out successfully"');
    return true;
  } catch (error) {
    toast.error(error.message);
  }
};

const provider = new GoogleAuthProvider();

export const GoogleRegister = (navigate) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
      navigate("/");
      return user;
    })
    .catch((error) => {
      if (error.code === "auth/popup-closed-by-user") {
        console.log("Popup closed by user");
      } else {
        toast.error(error.message);
      }
    });
};

export default app;
// auth/popup-closed-by-user
