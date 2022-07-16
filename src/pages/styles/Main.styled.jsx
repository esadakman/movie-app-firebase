import styled from "styled-components";

const CardArea = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  overflow-x: hidden;
  /* background-color: #c4d7ed; */
`;

export const Section = styled.section`
  margin-bottom: 3rem;
  overflow-x: hidden;
  background-color: #c4d7ed;
`;

export const LoadingDiv = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const CardWrapper = styled.div`
  margin: 1rem;
  border: 1px solid red;
  width: 25rem;
  max-width: 650px;
  height: 40rem;
  /* height: fit-content; */
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const Card = styled.div`
  flex: 1;
  flex-basis: 300px;
  background: #fff;
  border: 2px solid #fff;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  overflow: hidden;
  position: relative;
  & > img {
    width: 100%;
    height: 100%;
    transition: all 0.5s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  }
  :hover {
    transition: all 0.5s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
    transform: scale(0.97);
    & > img {
      transition: all 0.5s cubic-bezier(0.8, 0.5, 0.2, 1.4);
      transform: scale(1.6) rotate(20deg);
      filter: blur(3px);
    }

    & > div {
      left: 0px;
      transition: all 0.7s ease-in-out;
      clip-path: circle(75%);
    }
  }
`;

export const Desc = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: rgba(255, 255, 255, 0.7);
  width: 100%;
  height: 100%;
  transition: all 0.7s ease-in-out;
  padding: 1rem 1.5rem;
  box-sizing: border-box;
  clip-path: circle(0% at 100% 100%);

  & > h2 {
    color: #ff3838;
    letter-spacing: 1px;
    margin-bottom: 10px;
  }
  & > p {
    line-height: 24px;
    font-size: 1.5rem;
    text-align: justify;
    height: 80%;
  }
`;

export const ButtonCard = styled.button`
  width: fit-content;
  height: 40px;
  cursor: pointer;
  border-style: none;
  background-color: #ff3838;
  color: #fff;
  font-size: 15px;
  outline: none;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.4);
  transition: all 0.5s ease-in-out;
  :hover {
    transform: scale(0.95) translateX(-5px);
    transition: all 0.5s ease-in-out;
  }
`;

export default CardArea;
