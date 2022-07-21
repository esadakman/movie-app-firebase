import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import Footer from "../components/Footer";
import { GlobalStyles } from "../components/globalStyles/Global.styled";
import Navbar from "../components/Navbar";
import Login from "../pages//Login";
import Main from "../pages/Main";
import MovieDetail from "../pages/MovieDetail";
import NotFound from "../pages//NotFound";
import Register from "../pages/Register";
import { useAuthContext } from "../context/AuthContext";

const Router = () => {
  const { currentUser } = useAuthContext;
  function PrivateRouter() {
    return currentUser ? <Navigate to="/login" replace /> : <Outlet />;
  }
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/main" element={<Main />} />
          <Route path="/:search" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/details/:id" element={<PrivateRouter />}>
            <Route path="" element={<MovieDetail />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Router;
