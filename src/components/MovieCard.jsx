import { Card, CardWrapper, Desc, TitleCard } from "./globalStyles/Flex";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import defaultPoster from "../assets/posterNot.png";
import { toastWarn } from "../helpers/ToastNotify";
const IMG_URL = "https://image.tmdb.org/t/p/w1280";

const MovieCard = ({ poster_path, title, overview, vote_average, id }) => {
  const navigate = useNavigate();
  const { userCheck } = useAuthContext();

  const handleDetail = (id) => {
    if (userCheck) {
      navigate(`/details/${id}`);
    } else {
      toastWarn("Please log in to see details");
      navigate("/login");
    }
  };
  return (
    <CardWrapper onClick={() => handleDetail(id)} title="Click for details">
      <Card>
        <img
          src={poster_path ? IMG_URL + poster_path : defaultPoster}
          alt="poster"
        />
        <Desc>
          <h2>Overview</h2>
          <p>{overview} </p>
        </Desc>
      </Card>
      <TitleCard>
        <p>{title}</p>
        {userCheck && (
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
        )}
      </TitleCard>
    </CardWrapper>
  );
};

export default MovieCard;
