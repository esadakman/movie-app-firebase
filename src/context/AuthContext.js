import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

// import { createContext, useContext } from "react";
// import { register } from "../config/firebase";
// import {cre } from "fireba/auth";

// const UserContext = createContext();

// export const AuthContextProvider = ({ children }) => {
//   return (
//     <UserContext.Provider value={register}>
//       {/*  */}
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const UserAuth = () => {
//   return useContext(UserContext);
// };

// const AuthContext = () => {
//   return <div>AuthContext</div>;
// };

// export default AuthContext;
