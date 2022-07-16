import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import CardArea from "./styles/Main.styled";

const Main = () => {
  // const [user, setUser] = useState(null);
  const [movies, setMovies] = useState([]);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
  // const seachUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

  const getData = async () => {
    const { data } = await axios.get(url);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <CardArea>
        <MovieCard></MovieCard>
      </CardArea>
    </>
  );
};

export default Main;

//   /* <CardWrapper>
// <Card>
//   <img
//     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6uiZHpBI9UxOPjR2_MF2fBZeoj-Js4xvIZA&usqp=CAU"
//     alt=""
//   />
//   <Desc>
//     <h2>Equalizer 2</h2>
//     <p>
//       If you have a problem and there is nowhere else to turn, the
//       mysterious and elusive Robert McCall will deliver the vigilante
//       justice you seek. This time, however, McCall's past cuts
//       especially close to home when thugs kill Susan Plummer -- his
//       best friend and former colleague. Now out for revenge, McCall
//       must take on a crew of highly trained assassins who'll stop at
//       nothing to destroy him.{" "}
//     </p>
//     <ButtonCard>
//       <i class="fab fa-youtube"></i>
//       Play trailer on YouTube
//     </ButtonCard>
//   </Desc>
// </Card>
// <h1>Inglorius</h1>
// </CardWrapper> */
