import toast from "react-hot-toast";
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
import loadingGif from "../assets/loading.svg";
import Flex from "../components/globalStyles/Flex";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Main = () => {
  // ! useState hooks
  const { userCheck, API_KEY } = useAuthContext();
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState("");
  const [loading, setLoading] = useState(false);
  // ! API url's
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
  const seachUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
  // console.log(loading);

  const getData = async (apiType) => {
    // setLoading(false);
    try {
      const { data } = await axios.get(apiType);
      setMovies(data.results);
      // ! gif loader
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData(url);
    // getMovieSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setMovies]);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/${search}`);
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

      {loading ? (
        <>
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
      ) : (
        <Flex style={{ height: "74vh" }}>
          <img src={loadingGif} alt="loading gif"></img>
        </Flex>
      )}
    </>
  );
};

export default Main;

// const data = await axios.get(apiType).then((res) => {
//   console.log(res);
//   setMovies(res.data.results);
// });

// {
//   movies.length > 0 ? (
//     <CardArea>
//       {movies?.map((item) => (
//         <MovieCard {...item} key={item.id} />
//       ))}
//     </CardArea>
//   ) : (
//     <SectionStyled style={{ height: "75vh" }}>
//       <DivStyled>
//         <img src={vincent} alt="" />
//         <h1 style={{ fontSize: "5rem" }}>Ooppss...</h1>
//         <p>Sorry, We couldn't find what you're looking for.</p>
//       </DivStyled>
//     </SectionStyled>
//   );
// }
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
