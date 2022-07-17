import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../auth/firebase";
const AuthContext = createContext({});
const API_KEY = process.env.REACT_APP_API_KEY;

// ? consume function
export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [userCheck, setUserCheck] = useState("");
  //

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

// const [loading, setLoading] = useState(false);
// const getData = async (apiType) => {
//   setLoading(false);
//   try {
//     // const { data } = await axios.get(apiType);
//     // setMovies(data.results);
//     const data = await axios.get(apiType).then((res) => {
//       console.log(res);
//       setMovies(res.data.results);
//     });
//     setLoading(true);
//   } catch (error) {
//     console.log(error);
//   }
// };
