import vincent from "../assets/vincent.gif";
import SectionStyled, { DivStyled } from "./styles/NotFound.styled";
import { useNavigate } from "react-router-dom";
import { ButtonStyleCard } from "../components/globalStyles/Flex";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <SectionStyled>
      <DivStyled>
        <img src={vincent} alt="" />
        <h1>404</h1>
        <p>Ooppss... Something went wrong</p>
        <ButtonStyleCard
          onClick={() => navigate(`/home`)}
          style={{ width: "fit-content", height: "3rem" }}
        >
          GO TO HOMEPAGE{" "}
        </ButtonStyleCard>
      </DivStyled>
    </SectionStyled>
  );
};

export default NotFound;
