import axios from "axios";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import MovieCard, {
  Blur,
  InfoSection,
  MovieDesc,
  MovieHeader,
} from "./styles/MovieDetail.styled";
const API_KEY = process.env.REACT_APP_API_KEY;
const MovieDetail = () => {
  const { id } = useParams();
  console.log(id);

  const IMG_URL = "https://image.tmdb.org/t/p/w1280";
  const movieDetailUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;

  const getMovieDetail = async () => {
    const { data } = await axios.get(movieDetailUrl);
    console.log(data);
  };

  useEffect(() => {
    getMovieDetail();
  }, []);

  return (
    <div>
      <MovieCard>
        <InfoSection>
          <MovieHeader>
            <img
              src="https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg"
              alt=""
            />
            <h1>Bright</h1>
            <h4>2017, David Ayer</h4>
            <span>117 min</span>
            <p>Action, Crime, Fantasy</p>
          </MovieHeader>
          <MovieDesc>
            <p>
              Set in a world where fantasy creatures live side by side with
              humans. A human cop is forced to work with an Orc to find a weapon
              everyone is prepared to kill for.
            </p>
          </MovieDesc>
        </InfoSection>
        <Blur>
          <img
            src={
              "https://occ-0-2433-448.1.nflxso.net/art/cd5c9/3e192edf2027c536e25bb5d3b6ac93ced77cd5c9.jpg"
            }
            alt=""
          ></img>
        </Blur>
      </MovieCard>
    </div>
  );
};

export default MovieDetail;
