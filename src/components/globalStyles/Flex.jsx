import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : "center")};
  align-items: ${({ align }) => (align ? align : "center")};
  flex-wrap: ${({ wrap }) => wrap && wrap};
`;

export default Flex;

export const ButtonStyleCard = styled.button`
  background-color: ${({ theme }) => theme.colors.turqo};
  border: 2px solid ${({ theme }) => theme.colors.navBgColor};
  border-radius: 0.7rem;
  color: ${({ theme }) => theme.colors.navBgColor};
  text-decoration: none;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.7s ease-in-out;
  font-size: 1.1rem;
  width: 8rem;
  margin: 1rem auto;
  :hover {
    opacity: 0.9;
    color: ${({ theme }) => theme.colors.turqo};
    background-color: ${({ theme }) => theme.colors.navBgColor};
    border: 2px solid ${({ theme }) => theme.colors.turqo};
  }
  :active {
    opacity: 1;
  }
`;

export const CardWrapper = styled.div`
  margin: 1rem;
  width: 20rem;
  max-width: 650px;
  height: 34rem;
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
    text-align: left;
    color: ${({ theme }) => theme.colors.navBgColor};
    letter-spacing: 1px;
    margin: 10px 0;

    font-weight: 400;
  }
  & > p {
    overflow: auto;
    /* text-indent: px; */
    padding-right: 8px;
    line-height: 24px;
    font-size: 1.5rem;
    text-align: justify;
    height: 85%;
  }
`;

//

export const TitleCard = styled.div`
  position: relative;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.cardBack};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1rem;

  & > p {
    color: white;
    font-family: "Roboto", sans-serif;
    width: 85%;
    overflow: auto;
  }

  & > span {
    position: absolute;
    right: 0.5rem;
    padding: 5px;
    border-radius: 0.5rem;
    color: white;
    background-color: ${({ theme }) => theme.colors.success};
  }
`;

export const ButtonCard = styled.button`
  //   width: fit-content;
  //   height: 40px;
  //   cursor: pointer;
  //   border-style: none;
  //   background-color: #ff3838;
  //   color: #fff;
  //   font-size: 15px;
  //   outline: none;
  //   box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.4);
  //   transition: all 0.5s ease-in-out;
  //   :hover {
  //     transform: scale(0.95) translateX(-5px);
  //     transition: all 0.5s ease-in-out;
  //   }
  //
`;

export const YoutubeDiv = styled.div`
  width: 63vw;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s linear;
  @media (max-width: ${({ theme }) => theme.size.md}) {
    width: 80vw;
    height: calc(100vw * 0.35);
  }
  & > div {
    width: 100%;
    height: calc(90vw * 0.4);
    @media (max-width: ${({ theme }) => theme.size.md}) {
      height: calc(100vw * 0.45);
    }
    & > iframe {
      width: 100%;
      height: 100%;
    }
  }
`;
