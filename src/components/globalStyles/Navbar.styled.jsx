import styled from "styled-components";
import Flex from "../../components/globalStyles/Flex";
import { Link } from "react-router-dom";

export const Nav = styled(Flex)`
  padding: 0.5rem 1.5rem 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.navBgColor};
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 1;
  /* @media (max-width: ${({ theme }) => theme.size.lg}) {
    position: relative;
  } */
`;

export const Logo = styled(Link)`
  /* padding: 1rem 0; */
  color: ${({ theme }) => theme.colors.Bloggy1};
  text-decoration: none;
  font-weight: 800;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.turqo};
  }
`;

export const IMG = styled.img`
  width: 40px;
`;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.turqo};

  & > svg {
    transition: all 0.3s ease-in-out;
    display: flex;
    align-items: center;
    &:hover {
      /* background-color: ${({ theme }) => theme.colors.cardBack}; */
      color: white;
    }
  }
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    display: block;
  }
`;

export const Menu = styled(Flex)`
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "400px" : "0")};
    overflow: hidden;
    transition: max-height 0.3s ease-in;
    margin-top: 5px;
  }
`;

export const MenuLink = styled(Link)`
  text-align: center;
  padding: 11px 8px;
  font-size: 1.2rem;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.turqo};
  transition: all 0.5s ease-in-out;
  border-radius: 5px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.cardBack};
    color: white;
  }

  @media (max-width: ${({ theme }) => theme.size.sm}) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.cardBack};
    width: 100%;
    border-radius: 5px;
    text-decoration: underline;
  }
`;

export const FooterStyle = styled.footer`
  z-index: 5;
  display: flex;
  text-decoration: none;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.navBgColor};
  color: black;
  font-family: "Roboto", sans-serif;
  align-items: center;
  height: 8vh;
  padding: 0 1.5rem;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

export const Logos = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.7rem;
  & > a {
    transition: all 0.3s linear;
    color: white;
    &:hover {
      color: ${({ theme }) => theme.colors.turqo};
      transform: scale(1.2);
    }
  }
`;
export const TextStyle = styled.div`
  font-size: 0.7rem;
  color: white;
  & > p {
    color: white;
  }
`;
