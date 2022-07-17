import axios from "axios";
import { useEffect, useState } from "react";
// import { logout } from "../auth/firebase";
import MovieCard from "../components/MovieCard";
import CardArea from "./styles/Main.styled";

const Main = () => {
  // const [user, setUser] = useState(null);
  const [movies, setMovies] = useState([]);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
  // const seachUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

  const getData = async () => {
    const { data } = await axios.get(url);
    // console.log(data);
    setMovies(data.results);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // ! AuthContext'te oluşturmuş olduğum hook'umu kullanıyorum

  return (
    <>
      {/* {userCheck ? (
        <CardArea>
          {movies?.map((item) => (
            <MovieCard {...item} key={item.id} />
          ))}
        </CardArea>
      ) : (
        <p>ooppss</p>
      )} */}
      <CardArea>
        {movies?.map((item) => (
          <MovieCard {...item} key={item.id} />
        ))}
      </CardArea>
    </>
  );
};

export default Main;
