import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MovieCard, {
  Blur,
  InfoSection,
  MovieContainer,
  MovieDesc,
  MovieHeader,
  RateSpan,
  LeftDiv,
  YoutubeBtn,
} from "./styles/MovieDetail.styled";
import ModalYoutube from "../components/ModalYoutube";
import theatre from "../assets/theatre.jpg";
import { useAuthContext } from "../context/AuthContext";
import loadingGif from "../assets/loading.svg";
import Flex, { FormButton } from "../components/globalStyles/Flex";
// !====================
const MovieDetail = () => {
  const { id } = useParams();
  const [movieDatas, setMovieDatas] = useState();
  const [trailer, setTrailer] = useState();
  const { API_KEY } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  //
  const IMG_URL = "https://image.tmdb.org/t/p/w1280";
  const movieDetailUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;

  const getMovieDetail = async () => {
    try {
      const { data } = await axios.get(movieDetailUrl);
      // console.log(data);
      setMovieDatas(data);
      // console.log(typeof movieDatas?.genres);

      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };
  const getMovieTrailer = async () => {
    try {
      const { data } = await axios.get(videoUrl);
      // console.log(data);
      setTrailer(data.results[0]?.key);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieDetail();
    getMovieTrailer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieDetailUrl, videoUrl]);
  const openInNewTab = (url) => {
    // 👇️ IMDb linkine tıklanıldığında yeni sekmede açmak için aşağıdaki func. kullandım
    if (
      window.confirm(
        "You're now leaving this website. Would you like to continue ?"
      )
    ) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      console.log("Keep Surfing the Movie App");
    }
  };
  return (
    // <div>
    <MovieContainer>
      {loading ? (
        <Flex style={{ flexDirection: "column", gap: "1rem" }}>
          <MovieCard>
            <RateSpan
              title="Visit IMDb Page"
              onClick={() =>
                openInNewTab(
                  `https://www.imdb.com/title/${movieDatas?.imdb_id}`
                )
              }
            >
              <p>IMDb</p>
              <span
                style={{
                  backgroundColor: `${
                    movieDatas?.vote_average >= 8
                      ? "green"
                      : movieDatas?.vote_average >= 6
                      ? "orange"
                      : movieDatas?.vote_average >= 4
                      ? "#e8e80fc8"
                      : "red"
                  }`,
                }}
              >
                {movieDatas?.vote_average}
              </span>
            </RateSpan>
            <InfoSection>
              <LeftDiv>
                <MovieHeader>
                  <div className="imgContainer">
                    <img
                      src={
                        movieDatas?.poster_path
                          ? IMG_URL + movieDatas?.poster_path
                          : theatre
                      }
                      alt=""
                    />
                  </div>
                  <div className="textContainer">
                    <h3>
                      {movieDatas?.title}
                      <br />
                      <span>{movieDatas?.release_date.slice(0, 4)}</span>
                    </h3>

                    <p className="genre">
                      {
                        movieDatas?.genres
                          .map((type) => type.name)
                          .slice(0, 2)
                          .toString()
                        // .map((type) => type.name + ", ")
                        // .split(",")
                        // .slice(0, -2)
                        // movieDatas?.genres.map((type, index) => {
                        //   return <span key={index}>{type.name}</span>;
                        // })
                      }

                      <br />
                      <span>{movieDatas?.runtime} min</span>
                    </p>
                  </div>
                </MovieHeader>
                <MovieDesc>
                  <p>
                    {movieDatas?.overview
                      ? movieDatas?.overview
                      : "Information not found"}
                  </p>
                  <YoutubeBtn>
                    <ModalYoutube trailerKey={trailer} />
                  </YoutubeBtn>
                </MovieDesc>
              </LeftDiv>
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

          <FormButton variant="contained" onClick={() => navigate(-1)}>
            Go Back
          </FormButton>
        </Flex>
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
