import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import { GlobalStyles } from "../components/globalStyles/Global.styled";
import Navbar from "../components/Navbar";
import Login from "../pages/login/Login";
import Main from "../pages/main/Main";
import MovieDetail from "../pages/movieDetail/MovieDetail";
import NotFound from "../pages/notfound/NotFound";
import Register from "../pages/register/Register";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyles />
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
    </div>
  );
};

export default Router;
