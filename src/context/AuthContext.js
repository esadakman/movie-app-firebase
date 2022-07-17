import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../auth/firebase";
// import { onAuthStateChanged } from "firebase/auth";
const AuthContext = createContext({});

// ? consume function
export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [userCheck, setUserCheck] = useState("");
  const [movieId, setMovieId] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserCheck(user);
        // console.log(userCheck);
      } else {
        setUserCheck(false);
        // console.log(userCheck);
      }
    });
  }, []);
  const values = {
    movieId,
    setMovieId,
    userCheck,
    setUserCheck,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;
