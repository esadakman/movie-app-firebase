import styled from "styled-components";

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 82vh;
  margin-bottom: 4rem;
`;

const MovieCard = styled.div`
  position: relative;
  display: block;
  width: 80vw;
  height: 60vh;
  overflow: hidden;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.2s;
  box-shadow: 0px 0px 120px -25px rgba(0, 0, 0, 0.5);
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 80px -25px rgba(0, 0, 0, 0.5);
    transition: all 0.4s;
  }
  @media (max-width: ${({ theme }) => theme.size.mdl}) {
    /* width: 95%; */
    height: auto;
  }
  @media (max-width: ${({ theme }) => theme.size.md}) {
    /* height: 80%; */
    /* width: fit-content; */
  }
  @media (max-width: ${({ theme }) => theme.size.xs}) {
    height: auto;
    width: 90%;
  }
`;

export const RateSpan = styled.div`
  position: absolute;
  right: 1rem;
  cursor: pointer;
  top: 1rem;
  z-index: 4;
  display: flex;
  border-radius: 0.5rem;
  background-color: #f5de50;
  /* padding: 5px; */
  opacity: 0.9;
  transition: all 0.3s linear;
  & > p {
    font-weight: 600;
    padding: 5px;
  }
  & > span {
    padding: 5px;
    font-weight: 500;
    color: white;
    border-radius: 0 0.5rem 0.5rem 0;
  }
  @media (max-width: ${({ theme }) => theme.size.xs}) {
    right: 0.5rem;
    top: 0.5rem;
  }
  &:hover {
    opacity: 1;
    transform: scale(1.02);
  }
`;

export const LeftDiv = styled.div`
  width: 40rem;
  /* border: 1px solid red; */
  height: 100%;
  padding: 1rem;

  transition: all 0.2s;
  @media (max-width: ${({ theme }) => theme.size.lg}) {
    width: 30rem;
  }
  @media (max-width: ${({ theme }) => theme.size.md}) {
    width: 25rem;
  }
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    width: 100%;
  }
`;

export const InfoSection = styled.div`
  /* border: solid 1px red; */
  position: relative;
  width: 100%;
  height: 100%;
  background-blend-mode: multiply;
  z-index: 2;
  border-radius: 10px;
  @media (min-width: ${({ theme }) => theme.size.md}) {
    background: linear-gradient(to right, #e5e6e6 40%, transparent 100%);
  }
  @media (max-width: ${({ theme }) => theme.size.mdl}) {
    background: linear-gradient(to top, #e5e6e6 40%, transparent 100%);
    display: inline-grid;
  }
`;

export const MovieHeader = styled.div`
  position: relative;
  /* padding: 1.5rem; */
  height: 40%;
  display: flex;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.size.xs}) {
    padding-bottom: 0.5rem;
    height: fit-content;
  }
  & > div.imgContainer {
    & > img {
      position: relative;
      margin-right: 20px;
      height: 100%;
      max-height: 10rem;
      max-width: 8rem;
      box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);
      /* @media (max-width: ${({ theme }) => theme.size.md}) {
        height: 8rem;
      }
      @media (max-width: ${({ theme }) => theme.size.md}) {
        height: 8rem;
      } */
    }
  }
  & > div.textContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    max-height: 10rem;
    min-width: 10rem;
    gap: 0.5rem;
    @media (max-width: ${({ theme }) => theme.size.md}) {
      font-weight: bolder;
      gap: 0rem;
    }
    & > h3 {
      color: #000000;
      text-shadow: 0 0 2px white;
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      @media (max-width: ${({ theme }) => theme.size.md}) {
        gap: 0;
      }
    }

    & > p.genre {
      color: #000;
      text-shadow: 0 0 2px white;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      gap: 0.6rem;
      @media (max-width: ${({ theme }) => theme.size.md}) {
        gap: 0.1rem;
        padding-top: 5px;

        border-radius: 5px;
      }
    }
  }
`;

export const MovieDesc = styled.div`
  display: flex;
  flex-direction: column;
  /* margin: 1.5rem; */
  margin-top: 1rem;
  height: 50%;
  min-height: 11rem;
  max-height: 15rem;
  width: 80%;
  @media (max-width: ${({ theme }) => theme.size.md}) {
    /* margin: 0.5rem; */
    margin-left: 0;
    width: fit-content;
    min-width: 20rem;
    height: fit-content;
    max-height: 18rem;
  }
  @media (max-width: ${({ theme }) => theme.size.md}) {
    min-width: 16rem;
  }
  & > p {
    overflow: auto;
    color: #000;
    height: 90%;
    min-height: 8rem;
    width: 100%;
  }
`;

export const Blur = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  border-radius: 11px;
  right: 0;
  z-index: 1;

  & > img {
    background-size: contain;

    height: 100%;
    @media (min-width: ${({ theme }) => theme.size.md}) {
      width: 100%;
      background-position: 100% 10% !important;
    }
    @media (max-width: ${({ theme }) => theme.size.mdl}) {
      height: auto;

      min-height: 15rem;
      width: 100%;
      min-width: 30rem;
      background-position: 50% 50% !important;
    }
  }
`;

export const YoutubeBtn = styled.div`
  display: flex;
  justify-content: flex-start;
  /* padding: 0.5rem; */
  padding: 1rem 0;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    justify-content: center;
    padding-bottom: 0;
  }
`;

export default MovieCard;

// export const MovieSocial = styled.div`
//   height: 10%;
//   padding-left: 15px;
//   padding-bottom: 20px;
//   & > ul {
//     list-style: none;
//     padding: 0;
//     & > li {
//       display: inline-block;
//       color: rgba(0, 0, 0, 0.3);
//       transition: color 0.3s;
//       transition-delay: 0.15s;
//       margin: 0 10px;
//       :hover {
//         transition: color 0.3s;
//         color: rgba(0, 0, 0, 0.7);
//       }
//       & > i {
//         font-size: 19px;
//         cursor: pointer;
//       }
//     }
//   }
// `;
