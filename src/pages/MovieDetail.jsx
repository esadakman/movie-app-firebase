import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard, {
  Blur,
  InfoSection,
  MovieContainer,
  MovieDesc,
  MovieHeader,
} from "./styles/MovieDetail.styled";
import ModalYoutube from "../components/ModalYoutube";
import theatre from "../assets/theatre.jpg";
import { useAuthContext } from "../context/AuthContext";
import loadingGif from "../assets/loading.svg";

// !====================
const MovieDetail = () => {
  const { id } = useParams();
  const [movieDatas, setMovieDatas] = useState();
  const [trailer, setTrailer] = useState();
  const { API_KEY } = useAuthContext();
  const [loading, setLoading] = useState(false);

  //
  const IMG_URL = "https://image.tmdb.org/t/p/w1280";
  const movieDetailUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;

  const getMovieDetail = async () => {
    try {
      const { data } = await axios.get(movieDetailUrl);
      // console.log(data);
      setMovieDatas(data);

      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };
  const getMovieTrailer = async () => {
    try {
      const { data } = await axios.get(videoUrl);
      // console.log(data);
      setTrailer(data.results[0].key);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieDetail();
    getMovieTrailer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieDetailUrl, videoUrl]);

  return (
    // <div>
    <MovieContainer>
      {loading ? (
        <MovieCard>
          <InfoSection>
            <MovieHeader>
              <img
                src={
                  movieDatas?.poster_path
                    ? IMG_URL + movieDatas?.poster_path
                    : theatre
                }
                alt=""
              />
              <h3>{movieDatas?.title}</h3>
              <h4>2017, David Ayer</h4>
              <span>{movieDatas?.runtime} min</span>
              <p>
                {movieDatas?.genres[0].name}
                {/* {movieDatas.genres[1].name}, */}
                {/* {movieDatas.genres[2].name} */}
              </p>
            </MovieHeader>
            <MovieDesc>
              <p>{movieDatas?.overview}</p>
              <ModalYoutube trailerKey={trailer} />
            </MovieDesc>
          </InfoSection>
          <Blur>
            <img
              src={
                movieDatas?.backdrop_path
                  ? IMG_URL + movieDatas?.backdrop_path
                  : theatre
              }
              alt="poster"
            ></img>
          </Blur>
        </MovieCard>
      ) : (
        <>
          <img src={loadingGif} alt=""></img>
        </>
      )}
    </MovieContainer>
    // </div>
  );
};

export default MovieDetail;
