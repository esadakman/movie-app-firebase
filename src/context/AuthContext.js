import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../auth/firebase";
const AuthContext = createContext({});
const API_KEY = process.env.REACT_APP_API_KEY;
const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
// ? consume function
export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [userCheck, setUserCheck] = useState("");
  const [movies, setMovies] = useState([]);

  const getData = async (apiType) => {
    try {
      const { data } = await axios.get(apiType);
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

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
    userCheck,
    setUserCheck,
    getData,
    movies,
    url,
    API_KEY,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;
