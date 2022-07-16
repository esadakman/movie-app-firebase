import { ButtonCard, Card, CardWrapper, Desc } from "./globalStyles/Flex";

const MovieCard = () => {
  return (
    <div>
      <CardWrapper>
        <Card>
          <img
            src="https://s3.gomedia.us/wp-content/uploads/2010/01/inglourious.jpg"
            alt=""
          />
          <Desc>
            <h2>Equalizer 2</h2>
            <p>
              If you have a problem and there is nowhere else to turn, the
              mysterious and elusive Robert McCall will deliver the vigilante
              justice you seek. This time, however, McCall's past cuts
              especially close to home when thugs kill Susan Plummer -- his best
              friend and former colleague. Now out for revenge, McCall must take
              on a crew of highly trained assassins who'll stop at nothing to
              destroy him.{" "}
            </p>
            <ButtonCard>
              <i className="fab fa-youtube"></i>
              Play trailer on YouTube
            </ButtonCard>
          </Desc>
        </Card>
        <h1>Inglorius</h1>
      </CardWrapper>
    </div>
  );
};

export default MovieCard;
