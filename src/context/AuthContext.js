import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../auth/firebase";
const AuthContext = createContext({});
// ? API_KEY'i birden fazla kullandığım için vede useContext kullanımımı geliştirmek için buraya ekledim
const API_KEY = process.env.REACT_APP_API_KEY;

// ? consume function (kendi hook'umu oluşturarak useContext yerine kullandım)
export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [userCheck, setUserCheck] = useState("");
  // ? Kullanıcının durumunu takip etmek için fonksiyonumu buraya yazdım ve ihtiyaç durumunda useContext sayesinde çağırdım
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserCheck(user);
      } else {
        setUserCheck(false);
      }
    });
  }, []);
  const values = {
    userCheck,
    setUserCheck,
    API_KEY,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;
