import styled from "styled-components";

export const MovieContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 85vh;
  border: 1px red solid;
`;

const MovieCard = styled.div`
  position: relative;
  display: block;
  width: 800px;
  height: 350px;
  overflow: hidden;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.4s;
  box-shadow: 0px 0px 120px -25px rgba(0, 0, 0, 0.5);
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 80px -25px rgba(0, 0, 0, 0.5);
    transition: all 0.4s;
  }
  @media (max-width: ${({ theme }) => theme.size.mdl}) {
    width: 80%;
  }
`;

export const InfoSection = styled.div`
  border: solid 1px red;
  position: relative;
  width: 100%;
  height: 100%;
  background-blend-mode: multiply;
  z-index: 2;
  border-radius: 10px;
  @media (min-width: ${({ theme }) => theme.size.md}) {
    background: linear-gradient(to right, #e5e6e6 50%, transparent 100%);
  }
  @media (max-width: ${({ theme }) => theme.size.mdl}) {
    background: linear-gradient(to top, #e5e6e6 40%, transparent 100%);
    display: inline-grid;
  }
  /* @media (max-width: ${({ theme }) => theme.size.mdl}) {
    background: linear-gradient(to right, #e5e6e6 50%, transparent 100%);
  } */
`;

export const MovieHeader = styled.div`
  position: relative;
  padding: 1.5rem;
  height: 40%;

  /* @media (min-width: ${({ theme }) => theme.size.md}) {
    width: 65%;
  } */
  @media (max-width: ${({ theme }) => theme.size.mdl}) {
    width: 100%;
    margin-top: 2rem;
  }
  & > img {
    position: relative;
    float: left;
    margin-right: 20px;
    height: 120px;
    box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);
  }
  & > h1 {
    color: black;
    font-weight: 400;
  }
  & > h4 {
    color: #4a4a4a;
    font-weight: 400;
  }
  & > span {
    display: inline-block;
    margin-top: 15px;
    color: #555;
    padding: 5px 0;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.05);
  }
  & > p {
    /* display: inline-block; */
    color: #454444;
    margin-left: 10px;
  }
`;

export const MovieDesc = styled.div`
  padding: 0 25px;
  margin-top: 1rem;
  height: auto;
  @media (min-width: ${({ theme }) => theme.size.md}) {
    width: 50%;
  }
  @media (max-width: ${({ theme }) => theme.size.mdl}) {
    width: 100%;
    min-width: 15rem;
    margin-top: 0;
  }
  & > p {
    color: #00000084;
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
