import { Card, CardWrapper, Desc, TitleCard } from "./globalStyles/Flex";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import defaultPoster from "../assets/posterNot.png";
const IMG_URL = "https://image.tmdb.org/t/p/w1280";

const MovieCard = ({ poster_path, title, overview, vote_average, id }) => {
  const navigate = useNavigate();
  const { userCheck } = useAuthContext();
  // const { setMovieId, movieId } = useAuthContext();

  const handleDetail = (id) => {
    if (userCheck) {
      navigate(`/details/${id}`, { state: id });
    } else {
      toast.error("Please log in to see details");
    }
    // console.log(id);
    // navigate(`details/${id}`, { state: id })
  };
  return (
    // <CardWrapper onClick={() => navigate(`/details/${id}`, { state: id })}>

    <CardWrapper onClick={() => handleDetail(id)}>
      <Card>
        <img src={poster_path ? IMG_URL + poster_path : defaultPoster} alt="" />
        <Desc>
          <h2>Overview</h2>
          <p>{overview} </p>
        </Desc>
      </Card>
      <TitleCard>
        <p>{title}</p>
        <span
          style={{
            backgroundColor: `${
              vote_average >= 8
                ? "green"
                : vote_average >= 6
                ? "orange"
                : vote_average >= 4
                ? "#e8e80fc8"
                : "red"
            }`,
          }}
        >
          {vote_average.toFixed(1)}
        </span>
      </TitleCard>
    </CardWrapper>
  );
};

export default MovieCard;
