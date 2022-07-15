import { useEffect, useState } from "react";
import { ButtonStyleCard } from "../components/globalStyles/Flex";
// import toast from "react-hot-toast";
import { auth, logout } from "../config/firebase";
// import { useAuthState } from "react-firebase-hook/auth";

const Main = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      const user = {
        uid: authUser?.uid,
        email: authUser?.email,
      };

      if (authUser) {
        console.log(authUser);
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <div>{user ? <p>içerde</p> : <p>not</p>}</div>

      <ButtonStyleCard onClick={logout}>Sign Out</ButtonStyleCard>
    </>
  );
};

export default Main;
