// import { async } from "@firebase/util";
// import axios from "axios";
import toast from "react-hot-toast";
// import { logout } from "../auth/firebase";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { useAuthContext } from "../context/AuthContext";
import CardArea, {
  ButtonStyled,
  FormStyled,
  InputStyled,
  SearchBarDiv,
} from "./styles/Main.styled";
import SectionStyled, { DivStyled } from "./styles/NotFound.styled";
import vincent from "../assets/vincent.gif";
const Main = () => {
  // const [user, setUser] = useState(null);
  // const [movies, setMovies] = useState([]);
  const { getData, movies, url, userCheck, API_KEY } = useAuthContext();
  const [search, setSearch] = useState("");
  const seachUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

  // const getData = async (apiType) => {
  //   try {
  //     const { data } = await axios.get(apiType);
  //     console.log(data.results);
  //     if (data.results.length > 0) {
  //       setMovies(data.results);
  //     } else {
  //       toast.error("Please search somethig else");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    getData(url);
    // getMovieSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    userCheck
      ? getData(seachUrl + search)
      : toast.error("Please log in for search");
    setSearch("");
  };

  return (
    <>
      <SearchBarDiv>
        <FormStyled onSubmit={handleSearch}>
          <InputStyled
            type="text"
            placeholder="Search a movie ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            required
          />
          <ButtonStyled
            type="submit"
            // disabled={!search}
          >
            Search
          </ButtonStyled>
        </FormStyled>
      </SearchBarDiv>

      {movies.length > 0 ? (
        <CardArea>
          {movies?.map((item) => (
            <MovieCard {...item} key={item.id} />
          ))}
        </CardArea>
      ) : (
        <SectionStyled style={{ height: "75vh" }}>
          <DivStyled>
            <img src={vincent} alt="" />
            <h1 style={{ fontSize: "5rem" }}>Ooppss...</h1>
            <p>Sorry, We couldn't find what you're looking for.</p>
          </DivStyled>
        </SectionStyled>
      )}
    </>
  );
};

export default Main;

// {/* {userCheck ? (
//       <CardArea>
//         {movies?.map((item) => (
//           <MovieCard {...item} key={item.id} />
//         ))}
//       </CardArea>
//     ) : (
//       <p>ooppss</p>
//     )} */}
