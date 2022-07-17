import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import { GlobalStyles } from "../components/globalStyles/Global.styled";
import Navbar from "../components/Navbar";
import Login from "../pages//Login";
import Main from "../pages/Main";
import MovieDetail from "../pages/MovieDetail";
import NotFound from "../pages//NotFound";
import SignUp from "../pages/SignUp";
import { AuthContextProvider } from "../context/AuthContext";

const Router = () => {
  return (
    <>
      <GlobalStyles />

      <BrowserRouter>
        <AuthContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/:search" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/details/:id" element={<MovieDetail />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer />
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
};

export default Router;
