import Flex, {
  ButtonCard,
  Card,
  CardWrapper,
  Desc,
  TitleCard,
} from "./globalStyles/Flex";
const IMG_URL = "https://image.tmdb.org/t/p/w1280";
const MovieCard = ({ poster_path, title, overview, vote_average, id }) => {
  return (
    <div>
      <CardWrapper>
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
                vote_average >= 8
                  ? "green"
                  : vote_average >= 6
                  ? "orange"
                  : "red"
              }`,
            }}
          >
            {vote_average.toFixed(1)}
          </span>
        </TitleCard>
      </CardWrapper>
    </div>
  );
};

export default MovieCard;
