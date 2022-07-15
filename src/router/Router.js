import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import { GlobalStyles } from "../components/globalStyles/Global.styled";
import Navbar from "../components/Navbar";
import Login from "../pages//Login";
import Main from "../pages/Main";
import MovieDetail from "../pages/MovieDetail";
import NotFound from "../pages//NotFound";
import Register from "../pages//Register";
// import { AuthProvider } from "../context/Auth";

const Router = () => {
  return (
    <>
      <GlobalStyles />
      {/* <AuthProvider> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/details" element={<MovieDetail />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* </AuthProvider> */}
    </>
  );
};

export default Router;
