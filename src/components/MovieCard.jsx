import { Card, CardWrapper, Desc, TitleCard } from "./globalStyles/Flex";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
const IMG_URL = "https://image.tmdb.org/t/p/w1280";

const MovieCard = ({ poster_path, title, overview, vote_average, id }) => {
  let navigate = useNavigate();
  const { userCheck } = useAuthContext();
  const handleDetail = (id) => {
    userCheck ? navigate(`details/${id}`) : toast.error("You Need To sign in");
    // console.log(id);
    // navigate(`details/${id}`, { state: id })
  };
  return (
    <CardWrapper onClick={() => handleDetail(id)}>
      <Card>
        <img src={IMG_URL + poster_path} alt="" />
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
              vote_average >= 8 ? "green" : vote_average >= 6 ? "orange" : "red"
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
